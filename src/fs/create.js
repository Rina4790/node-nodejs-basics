import * as fs from "node:fs";

const create = async () => {
  fs.readFile("src/fs/files/fresh.txt", "utf8", function (err) {
    if (err) {
      fs.writeFile(
        "src/fs/files/fresh.txt",
        "I am fresh and young",
        function (err) {
          if (err) console.log("error", err);
        }
      );
    } else {
      const err = new Error("FS operation failed");
      console.log(err);
    }
  });
};

await create();
