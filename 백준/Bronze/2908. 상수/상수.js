let [num1, num2] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

num1 = Number(num1.split("").reverse().join(""));
num2 = Number(num2.split("").reverse().join(""));
console.log(num1 > num2 ? num1 : num2);