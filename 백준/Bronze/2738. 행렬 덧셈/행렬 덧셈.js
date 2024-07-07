const [T, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [N, M] = T;
for (let i = 0; i < N; i++) {
  let arr = [];
  for (let j = 0; j < M; j++) {
    arr.push(input[i][j] + input[i + N][j]);
  }
  console.log(arr.join(" "));
}