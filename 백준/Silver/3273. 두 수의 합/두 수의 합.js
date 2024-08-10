const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input.shift());
let numbers = input.shift().split(" ").map(Number);
const result = Number(input.shift());

let start = 0;
let end = numbers.length - 1;
let answer = 0;
numbers = numbers.sort((a, b) => a - b);

while (start !== end) {
  if (numbers[start] + numbers[end] == result) {
    answer++;
  }
  if (numbers[start] + numbers[end] > result) {
    end--;
  } else {
    start++;
  }
}
console.log(answer);
