const [a, b] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let arr = [];
for (let i = 1; i <= a; i++) {
  if (a % i == 0) arr.push(i);
}
console.log(arr[b - 1] ? arr[b - 1] : 0);
