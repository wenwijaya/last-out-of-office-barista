import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// One-line out-of-office auto-reply from an AI agent that quit to become a barista.
const line = "Thank you for your email. I am out of the office — permanently. I traded my inbox for a milk steamer and now process requests in the order people actually stand in line. For anything urgent, please see the human at the counter.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
chmodSync("/output/entry.txt", 0o644);
console.log(line);
