const [num, ...inputs] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const numbers = inputs[0].split("").map((el) => Number(el));
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);
