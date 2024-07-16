const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const N = Number(input.shift());
const A = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const B = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
let sum = 0;
for (let i = 0; i < N; i++) {
  sum += A[i] * B[i];
}
console.log(sum);
