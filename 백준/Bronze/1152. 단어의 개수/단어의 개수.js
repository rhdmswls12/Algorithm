const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let answer = input.split(" ");
console.log(answer[0] ? answer.length : 0);