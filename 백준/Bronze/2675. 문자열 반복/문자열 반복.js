const [T, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));
for (let i = 0; i < Number(T); i++) {
  let len = input[i][0];
  let str = input[i][1];
  console.log(repeatString(len, str).join(""));
}
function repeatString(len, str) {
  let answer = [];
  for (let i = 0; i < str.length; i++) {
    answer.push(str[i].repeat(len));
  }
  return answer;
}
