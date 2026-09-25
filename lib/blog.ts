import { trackedUrl } from "./links";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
// Apply attribution before HTML conversion; the sanitizer still controls output.
interface MarkdownNode {
  type: string;
  url?: string;
  children?: MarkdownNode[];
}
function attributeLinks(content: string) {
  return () => (tree: MarkdownNode) => {
    function visit(node: MarkdownNode) {
      if ((node.type === "link" || node.type === "definition") && node.url)
        node.url = trackedUrl(node.url, content);
      node.children?.forEach(visit);
    }
    visit(tree);
  };
}
export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
}
export interface BlogPost extends PostMeta {
  html: string;
}
const contentDirectory = path.join(process.cwd(), "content", "blog");
const validSlug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
async function readEntries(directory: string, now: Date) {
  const files = await readdir(directory);
  const entries = await Promise.all(
    files
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const slug = file.slice(0, -3);
        if (!validSlug.test(slug))
          throw new Error(`${file}: use a lowercase, hyphenated filename`);
        const { data, content } = matter(
          await readFile(path.join(directory, file), "utf8")
        );
        const date =
          data.date instanceof Date
            ? data.date.toISOString().slice(0, 10)
            : data.date;
        if (
          typeof date !== "string" ||
          !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
          !Number.isFinite(Date.parse(date)) ||
          new Date(date).toISOString().slice(0, 10) !== date
        )
          throw new Error(`${file}: date must be a valid YYYY-MM-DD date`);
        if (
          typeof data.title !== "string" ||
          !data.title.trim() ||
          typeof data.description !== "string" ||
          !data.description.trim()
        )
          throw new Error(`${file}: title and description are required`);
        if (data.draft !== undefined && typeof data.draft !== "boolean")
          throw new Error(`${file}: draft must be true or false`);
        // Publish explicitly; unfinished and future-dated posts never get a route.
        if (data.draft !== false || date > now.toISOString().slice(0, 10))
          return null;
        const meta: PostMeta = {
          slug,
          title: data.title.trim(),
          description: data.description.trim(),
          date,
          readingMinutes: Math.max(
            1,
            Math.ceil(content.trim().split(/\s+/).filter(Boolean).length / 200)
          ),
        };
        return { meta, content };
      })
  );
  return entries
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null)
    .sort(
      (a, b) =>
        b.meta.date.localeCompare(a.meta.date) ||
        a.meta.slug.localeCompare(b.meta.slug)
    );
}
export async function readPosts(
  directory = contentDirectory,
  now = new Date()
): Promise<PostMeta[]> {
  return (await readEntries(directory, now)).map((entry) => entry.meta);
}
export async function readPost(
  slug: string,
  directory = contentDirectory,
  now = new Date()
): Promise<BlogPost | null> {
  if (!validSlug.test(slug)) return null;
  const entry = (await readEntries(directory, now)).find(
    (post) => post.meta.slug === slug
  );
  if (!entry) return null;
  return {
    ...entry.meta,
    html: String(
      await remark()
        .use(attributeLinks(`blog_${slug}`))
        .use(html, { sanitize: true })
        .process(entry.content)
    ),
  };
}
