import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry = "My father, knuckles bleeding from a stripped bolt in his garage, set down his spanner and said, \"Son, the bolt doesn't care how angry you are — so stop shouting and start turning.\"";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, entry, "utf8");
process.stdout.write(entry + "\n");
