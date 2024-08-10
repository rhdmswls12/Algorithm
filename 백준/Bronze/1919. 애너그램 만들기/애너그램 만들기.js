const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
let first = input[0].split("").sort();
let second = input[1].split("").sort();
let count = 0;
let alphabet1 = {};
let alphabet2 = [];

for (let i = 97; i <= 122; i++) {
  alphabet1[String.fromCharCode(i)] = 0;
  alphabet2[String.fromCharCode(i)] = 0;
}
for (let i = 0; i < first.length; i++) {
  alphabet1[first[i]]++;
}
for (let i = 0; i < second.length; i++) {
  alphabet2[second[i]]++;
}
let array1 = Object.values(alphabet1);
let array2 = Object.values(alphabet2);
for (let i = 0; i < 26; i++) {
  if (array1[i] != array2[i]) {
    count += Math.abs(array1[i] - array2[i]);
  }
}
console.log(count);
