const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();
const bracket = input.split("");
let answer = 0;
const stack = [];

for (let i = 0; i < bracket.length; i++) {
  if (bracket[i] == "(") {
    stack.push("(");
  } else {
    if (bracket[i - 1] == "(") {
      stack.pop();
      answer += stack.length;
    } else {
      stack.pop();
      answer++;
    }
  }
}
console.log(answer);