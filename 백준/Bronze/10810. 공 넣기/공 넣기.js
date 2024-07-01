const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const baskets = input[0][0];
const num = input[0][1];
let answer = Array(baskets).fill(0);

for (let i = 1; i <= num; i++) {
  answer = check(input[i]);
}
console.log(answer.join(" "));

function check(arr) {
  let start = arr[0] - 1;
  let end = arr[1] - 1;
  let ball = arr[2];
  for (let i = start; i <= end; i++) {
    answer[i] = ball;
  }
  return answer;
}
