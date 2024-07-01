const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const baskets = input[0][0];
const num = input[0][1];
let answer = [];

for (let i = 1; i <= baskets; i++) {
  answer[i - 1] = i;
}
for (let i = 1; i <= num; i++) {
  swap(input[i][0] - 1, input[i][1] - 1);
}
console.log(answer.join(" "));

function swap(idx1, idx2) {
  let tmp = answer[idx1];
  answer[idx1] = answer[idx2];
  answer[idx2] = tmp;
}
