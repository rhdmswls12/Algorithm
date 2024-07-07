const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("");
let arr = [];
for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
  arr.push(input.indexOf(String.fromCharCode(i)));
}
console.log(arr.join(" "));