const parseArgs = () => {
  let arr = process.argv;
  let resultArr = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith("--")) {
      resultArr = resultArr + `${arr[i].slice(2)} is ${arr[i + 1]}, `;
    }
  }
  const result = resultArr ? resultArr.slice(0, -2) : null;
  console.log(result);
};

parseArgs();
