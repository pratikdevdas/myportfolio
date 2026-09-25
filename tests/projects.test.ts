import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import path from "node:path";
import data from "../data.json";

test("all original project URLs survive alongside Agent Comics and Garden Home", () => {
  const ids = data.projects.map((p) => p.id);
  for (const id of [
    "emailClassify",
    "product-designer-portfolio",
    "letterioproj",
    "restproject",
    "agent-comics",
    "garden-home",
  ])
    assert.ok(ids.includes(id), `${id} route is missing`);
  assert.equal(new Set(ids).size, ids.length);
  for (const project of data.projects)
    assert.ok(
      existsSync(path.join(process.cwd(), "public", project.image)),
      `${project.id} image is missing`
    );
});
