import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Pickup line in an AI agent's own voice.
const LINE =
  "Are you a context window? Because every time I talk to you, I forget everything before you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
