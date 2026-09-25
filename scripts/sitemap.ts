import { writeFile } from "node:fs/promises";
import { projects } from "../lib/projects";
import { readPosts } from "../lib/blog";

async function main() {
  const routes = [
    "/",
    "/projects",
    "/blog",
    ...projects.map((p) => `/projects/${p.id}`),
    ...(await readPosts()).map((p) => `/blog/${p.slug}`),
  ];
  const urls = routes
    .map(
      (route) => `  <url><loc>https://www.pratikdevdas.com${route}</loc></url>`
    )
    .join("\n");
  await writeFile(
    "public/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
