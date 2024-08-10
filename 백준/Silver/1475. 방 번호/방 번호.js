const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("");
let number = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let num of input) {
  if (num == 6 || num == 9) {
    number[6]++;
  } else {
    number[num]++;
  }
}
number[6] = Math.ceil(number[6] / 2);
console.log(Math.max(...number));
