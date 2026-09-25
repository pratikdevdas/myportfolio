import test, { TestContext } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { readPosts, readPost } from "../lib/blog";

const now = new Date("2026-09-25T12:00:00Z");
async function fixture(t: TestContext) {
  const dir = await mkdtemp(path.join(tmpdir(), "portfolio-blog-"));
  t.after(() => rm(dir, { recursive: true, force: true }));
  return dir;
}
const post = (
  date: string,
  draft = "false",
  body = "## Hello\nA **useful** post."
) =>
  `---\ntitle: Test post\ndescription: A short summary\ndate: "${date}"\ndraft: ${draft}\n---\n${body}`;

test("published posts are newest first; drafts and future posts are not exposed", async (t) => {
  const dir = await fixture(t);
  await Promise.all([
    writeFile(path.join(dir, "older.md"), post("2026-09-01")),
    writeFile(path.join(dir, "newer.md"), post("2026-09-24")),
    writeFile(path.join(dir, "draft.md"), post("2026-09-24", "true")),
    writeFile(path.join(dir, "future.md"), post("2026-10-01")),
    writeFile(
      path.join(dir, "unset.md"),
      post("2026-09-24").replace("draft: false\n", "")
    ),
  ]);
  assert.deepEqual(
    (await readPosts(dir, now)).map((p) => p.slug),
    ["newer", "older"]
  );
  assert.equal(await readPost("draft", dir, now), null);
  assert.equal(await readPost("future", dir, now), null);
  assert.equal(await readPost("unset", dir, now), null);
});

test("Markdown renders safely without raw scripts or javascript links", async (t) => {
  const dir = await fixture(t);
  await writeFile(
    path.join(dir, "safe.md"),
    post(
      "2026-09-24",
      "false",
      "## Hello\n**Bold**\n<script>alert(1)</script>\n[bad](javascript:alert%281%29)"
    )
  );
  const result = await readPost("safe", dir, now);
  assert.ok(result);
  assert.match(result.html, /<h2>Hello<\/h2>/);
  assert.match(result.html, /<strong>Bold<\/strong>/);
  assert.doesNotMatch(result.html, /<script|href="javascript:/i);
});

test("invalid and missing slugs return not-found instead of reading arbitrary files", async (t) => {
  const dir = await fixture(t);
  for (const slug of ["../private", "missing", "%2e%2e", "/etc/passwd"]) {
    assert.equal(await readPost(slug, dir, now), null);
  }
});

test("invalid publication dates fail the build with the filename", async (t) => {
  const dir = await fixture(t);
  await writeFile(path.join(dir, "invalid.md"), post("2026-02-30"));
  await assert.rejects(() => readPosts(dir, now), /invalid\.md.*date/i);
});

test("published Markdown links retain their destinations with outbound attribution", async (t) => {
  const dir = await fixture(t);
  await writeFile(
    path.join(dir, "links.md"),
    post(
      "2026-09-24",
      "false",
      "[Watch](https://example.com/watch?v=demo#clip)\n[Work](/projects)\n[Reference][ref]\n\n[ref]: https://agentcomics.com"
    )
  );
  const result = await readPost("links", dir, now);
  assert.ok(result);
  assert.match(result.html, /v=demo&#x26;utm_source=pratikdevdas.com/);
  assert.match(result.html, /utm_content=blog_links#clip/);
  assert.match(result.html, /href="\/projects"/);
  assert.match(
    result.html,
    /https:\/\/agentcomics.com\/\?utm_source=pratikdevdas.com/
  );
});
