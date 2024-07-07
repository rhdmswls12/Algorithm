const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("");

let answer = 0;
const dial = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < dial.length; j++) {
    if (dial[j].includes(input[i])) {
      answer += j + 3;
    }
  }
}
console.log(answer);