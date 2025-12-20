import { execSync } from "node:child_process";
import fs from "node:fs";

const repo = process.env.CONTENT_REPO;     // 예: NSKLog/p1-homepage-content
const token = process.env.CONTENT_TOKEN;   // GitHub Fine-grained PAT (read-only)

const target = "src/content/devlog";
const tmp = "__content_tmp";

function run(cmd) {
  execSync(cmd, { stdio: "inherit" });
}

function ensureEmptyDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

if (!repo || !token) {
  console.log("[content] skip: CONTENT_REPO or CONTENT_TOKEN is not set.");
  process.exit(0);
}

console.log("[content] pulling devlog content from private repo...");

ensureEmptyDir(target);
fs.rmSync(tmp, { recursive: true, force: true });

const url = `https://${token}@github.com/${repo}.git`;
run(`git clone --depth 1 ${url} ${tmp}`);

if (!fs.existsSync(`${tmp}/src/content/devlog`)) {
  console.error("[content] ERROR: expected '__content_tmp/src/content/devlog' not found.");
  process.exit(1);
}

fs.cpSync(`${tmp}/src/content/devlog`, target, { recursive: true });

fs.rmSync(tmp, { recursive: true, force: true });
console.log("[content] devlog content pulled successfully.");
