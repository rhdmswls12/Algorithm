const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const arr = input[1];
const num = input[2][0];
let answer = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === num) {
    answer++;
  }
}
console.log(answer);
