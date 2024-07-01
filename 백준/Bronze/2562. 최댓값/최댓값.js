const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const max = Math.max(...input);
const index = input.findIndex((num) => num === max);
console.log(max + "\n" + Number(index + 1));
