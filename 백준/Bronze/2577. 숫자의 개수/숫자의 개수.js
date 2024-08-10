const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const [A, B, C] = input.map(Number);
const result = (A * B * C).toString().split("");
const arr = Array(10).fill(0);

for (let num of result) {
  arr[num]++;
}
console.log(arr.join("\n"));