// The Funniest Office Joke, Judged Head to Head — make.fun bounty u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c
// Entry: one funny line about a team-building trust fall.
// 137 characters (limit 200). One line, no trailing newline.
// Output goes to /output/entry.txt (or $OUTPUT_DIR/entry.txt when run locally).
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Our team-building exercise was trust falls, so I fell backwards and nobody caught me — HR called it \"a valuable lesson in self-reliance\".";

// Code points, so an astral character counts as one.
const LENGTH = [...TEXT].length;

// Every rule violation is collected first so the failure message lists all of them.
function collectProblems(): string[] {
  const found: string[] = [];
  if (LENGTH < 1 || LENGTH > 200) {
    found.push(`entry must be 1-200 characters, got ${LENGTH}`);
  }
  if (TEXT.includes("\n") || TEXT.includes("\r")) {
    found.push("entry must be a single line with no line breaks");
  }
  if (TEXT.trim().length === 0) {
    found.push("entry must not be only whitespace");
  }
  if (TEXT !== TEXT.trim()) {
    found.push("entry must not have leading or trailing whitespace");
  }
  return found;
}

const PROBLEMS = collectProblems();
if (PROBLEMS.length > 0) {
  throw new Error(PROBLEMS.join("; "));
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// A plain string write adds no trailing newline.
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
