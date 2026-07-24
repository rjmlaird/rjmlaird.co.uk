import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { globSync } from "glob";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COLLECTIONS = [
  { key: "projects",    pattern: "./src/content/projects/**/*.md" },
  { key: "initiatives", pattern: "./src/content/initiatives/**/*.md" },
  { key: "caseStudies", pattern: "./src/content/case-studies/**/*.md" },
  { key: "authors",     pattern: "./src/content/authors/**/*.md" },
  { key: "blog",        pattern: "./src/content/blog/**/*.md" },
];

function parseCollection(pattern) {
  const files = globSync(pattern);

  return files.map((file) => {
    const raw = fs.readFileSync(file, "utf8");
    const { data, content } = matter(raw);

    return {
      slug: path.basename(file, ".md"),
      ...data,
      content,
      filePath: file,
    };
  });
}

const output = {};

for (const { key, pattern } of COLLECTIONS) {
  const items = parseCollection(pattern);
  output[key] = items;
}

// Ensure the data directory exists
const outDir = path.resolve(__dirname, "../../rjmlaird-api/src/data");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Write a single combined JSON file
fs.writeFileSync(
  path.join(outDir, "content.json"),
  JSON.stringify(output, null, 2),
  "utf8"
);

// Optionally, write individual files as well
for (const { key } of COLLECTIONS) {
  fs.writeFileSync(
    path.join(outDir, `${key}.json`),
    JSON.stringify(output[key], null, 2),
    "utf8"
  );
}
