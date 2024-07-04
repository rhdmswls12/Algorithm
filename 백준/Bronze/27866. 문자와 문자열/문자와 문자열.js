const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const str = input[0];
const num = Number(input[1]);
console.log(str[num - 1]);