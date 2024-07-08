const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();
let max = 1;
let count = 1;
let i = 1;
while (true) {
  if (input <= max) break;
  max += 6 * i;
  i++;
  count++;
}
console.log(count);