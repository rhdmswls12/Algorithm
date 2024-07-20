const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
let T = Number(input.shift());
let cases = input.map((el) => el.split(" ").map(Number));

for (let i = 0; i < T; i++) {
  let [n, m] = cases[i];
  let result = 1;
  let count = 0;
  for (let j = m; j >= 1; j--) {
    if (count == n) break;
    result *= j;
    count++;
  }
  let a = 1;
  for (let j = n; j >= 1; j--) {
    a *= j;
  }
  console.log(Math.round(result / a));
}
