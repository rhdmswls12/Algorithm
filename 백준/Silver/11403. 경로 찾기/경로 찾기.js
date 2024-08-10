const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const N = Number(input.shift());
let arr = input.map((el) => el.split(" ").map(Number));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      if (arr[j][i] && arr[i][k]) {
        arr[j][k] = 1;
      }
    }
  }
}
for (let i = 0; i < N; i++) {
  console.log(arr[i].join(" "));
}
