import * as fs from "node:fs";
import * as zlib from "node:zlib";
import { pipeline } from "node:stream";

const decompress = async () => {
  const archive = fs.createReadStream("src/zip/files/archive.gz");
  const fileToDecompress = fs.createWriteStream(
    "src/zip/files/fileToCompress.txt"
  );
  const gunzip = zlib.Gunzip();

  pipeline(archive, gunzip, fileToDecompress, (err) => {
    if (err) {
      console.error("Error", err.message);
    }
  });
};

await decompress();
