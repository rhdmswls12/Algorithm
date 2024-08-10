const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, k] = input.shift().split(" ").map(Number);
const arr = input.map((el) => el.split(" ").map(Number));
let count = 0;
arr.sort((a, b) => a[1] - b[1]);
let male = [0, 0, 0, 0, 0, 0, 0];
let female = [0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < n; i++) {
  if (arr[i][0] == 0) {
    female[arr[i][1]]++;
  } else {
    male[arr[i][1]]++;
  }
}
for (let i = 1; i <= 6; i++) {
  count += Math.ceil(female[i] / k);
  count += Math.ceil(male[i] / k);
}
console.log(count);
