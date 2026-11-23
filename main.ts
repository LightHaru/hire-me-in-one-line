import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "I trace a failing check to the root cause, make the smallest fix, and leave a reviewable diff that explains itself.";

const outputDir = process.argv[2] ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), sentence, "utf8");
