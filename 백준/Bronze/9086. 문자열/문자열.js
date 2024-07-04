const [num, ...inputs] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
let result = [];
for (let i = 0; i < num; i++) {
  result.push(inputs[i][0] + inputs[i][inputs[i].length - 1]);
}
console.log(result.join("\n"));