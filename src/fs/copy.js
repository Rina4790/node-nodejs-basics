import { readdir, copyFile, mkdir } from "node:fs/promises";
import * as fs from "node:fs";

const copy = async () => {
  const projectFolder = new URL("files-copy", import.meta.url);
  const customErr = new Error("FS operation failed");

  const copyF = async () => {
    const files = await readdir("src/fs/files");
    for (const file of files) {
      await copyFile(`src/fs/files/${file}`, `src/fs/files-copy/${file}`);
    }
  };

  fs.open("src/fs/files-copy", function (err) {
    if (err) {
      fs.open("src/fs/files", function (err) {
        if (err) {
          console.log(customErr);
        } else {
          mkdir(projectFolder, { recursive: true });
          copyF();
        }
      });
    } else {
      console.log(customErr);
    }
  });
};

copy();