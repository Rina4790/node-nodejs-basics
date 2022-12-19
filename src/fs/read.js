import { readFile } from "node:fs/promises";

const read = async () => {
  try {
    const contents = await readFile("src/fs/files/fileToRead.txt", {
      encoding: "utf8",
    });
    console.log(contents);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
