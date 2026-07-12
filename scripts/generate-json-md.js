import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { globSync } from "glob";

const files = globSync("./src/content/projects/**/*.md");

const items = files.map((file) => {
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);

  return {
    slug: path.basename(file, ".md"),
    ...data,
    content,
  };
});

fs.writeFileSync("src/data/projects.json", JSON.stringify(items, null, 2));
