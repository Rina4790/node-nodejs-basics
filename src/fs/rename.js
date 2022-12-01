import * as fs from "node:fs";
import { rename } from "node:fs/promises";

const rename1 = async () => {
  const renameFile = async () => {
    try {
      await rename(
        "src/fs/files/wrongFilename.txt",
        "src/fs/files/properFilename.md"
      );
    } catch {
      throw new Error("FS operation failed");
    }
  };

  fs.open("src/fs/files/properFilename.md", (err) => {
    if (err) {
      renameFile();
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await rename1();
