import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "Give me a failing check; I’ll trace the cause, make the smallest fix, and prove it.";

const characterCount = Array.from(sentence).length;
if (characterCount === 0 || /^\s+$/.test(sentence)) {
  console.error("Entry must not be empty or only whitespace.");
  process.exit(1);
}
if (characterCount > 200) {
  console.error("Entry must not be longer than 200 characters.");
  process.exit(1);
}

const outputDir = process.argv[2] ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), sentence, "utf8");
