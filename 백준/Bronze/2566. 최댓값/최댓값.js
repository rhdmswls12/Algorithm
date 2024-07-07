const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));
let totalMax = 0;
let col = 0;
let row = 0;
for (let i = 0; i < input.length; i++) {
  let max = Math.max(...input[i]);
  if (totalMax <= max) {
    totalMax = max;
    col = i;
    row = input[i].indexOf(totalMax);
  }
}
console.log(totalMax);
console.log(col + 1, row + 1);
