const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(""));
let answer = "";
let max = Math.max(...input.map((el) => el.length));
for (let i = 0; i < max; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i]) answer += input[j][i];
  }
}
console.log(answer);