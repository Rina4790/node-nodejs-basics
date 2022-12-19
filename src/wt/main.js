import * as os from "node:os";
import { Worker } from "node:worker_threads";

const script = "./worker.js";
const anotherScript = new URL(script, import.meta.url);

const performCalculations = async () => {
  const numOfCpus = os.cpus().length;
  const arr = [];

  for (let i = 1; i <= numOfCpus; i++) {
    arr.push(
      new Promise((resolve, rejects) => {
        const worker = new Worker(anotherScript, {
          workerData: 9 + i,
        });
        worker.on("message", (value) => {
          resolve({ status: "resolved", data: value });
        });
        worker.on("error", (err) => {
          resolve({ status: "error", data: null });
        });
      })
    );
  }
  console.log(await Promise.all(arr))
};

await performCalculations();
