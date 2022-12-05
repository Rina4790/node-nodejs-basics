import * as workerJs from "node:worker_threads";
export const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
  workerJs.parentPort.postMessage(nthFibonacci(workerJs.workerData));
};

sendResult();
