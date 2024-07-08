const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();
console.log(Math.pow(2 ** Number(input) + 1, 2));