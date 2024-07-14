const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
let N = Number(input.shift());
let cards = input.shift().split(" ").map(Number);
let M = Number(input.shift());
let match = input.shift().split(" ").map(Number);
let cardMap = new Map();
let answer = [];

for (let number of cards) {
  if (cardMap.has(number)) {
    cardMap.set(number, cardMap.get(number) + 1);
  } else {
    cardMap.set(number, 1);
  }
}
for (let i = 0; i < M; i++) {
  if (cardMap.has(match[i])) {
    answer.push(cardMap.get(match[i]));
  } else {
    answer.push(0);
  }
}
console.log(answer.join(" "));
