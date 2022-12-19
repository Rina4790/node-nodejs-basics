import * as cp from "node:child_process";
const script = "./files/script.js";
const pathToScript = new URL(script, import.meta.url);

const spawnChildProcess = async (...args) => {
  const child = cp.fork(pathToScript, args);
  child.on("error", (err) => {
    console.error(err.message);
  });
};

await spawnChildProcess(1, 2, 'ww', null, script);