import { readFileSync } from "fs";
import path from "path";

export default function handler(req, res) {
  const file = path.join(process.cwd(), "files", "db.json");
  const stringfied = readFileSync(file, "utf8");

  res.setHeader("Content-Type", "application/json");
  return res.end(stringfied);
}