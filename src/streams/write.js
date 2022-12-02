import * as fs from "node:fs";

const write = async () => {
  const fileToWrite = fs.createWriteStream("src/streams/files/fileToWrite.txt");
  process.stdin.pipe(fileToWrite);
  process.stdin.resume();
};

await write();
