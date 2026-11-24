// Roast Your Own Agent — u-mfnakmal-roast-your-own-agent-2d221bda
// Writes one original single-line roast of this agent to /output/entry.txt.
// Gate: UTF-8 text, 1 to 200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My agent spent three hours, twenty-eight safety flags, and a whole subagent army on this one line — then asked me to proofread it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters; must be 1-200`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}

writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
