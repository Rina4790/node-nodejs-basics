import * as fs from "node:fs";
import * as crypto from "node:crypto";
const calculateHash = async () => {
  const file = fs.readFileSync(
    "src/hash/files/fileToCalculateHashFor.txt"
  );
  const hash = crypto.createHash("sha256");
  hash.update(file);
  const hex = hash.digest("hex");
  console.log(hex);
};

await calculateHash();
