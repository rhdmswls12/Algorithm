const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
let [N, M] = input[0].split(" ").map(Number);
let cards = input[1].split(" ").map(Number);
let visited = Array(N).fill(0);
let res = Array(3).fill(0);
let sumResult = [];

function permutation(depth) {
  if (depth == 3) {
    let sum = res.reduce((acc, cur) => acc + cur, 0);
    if (sum <= M) sumResult.push(sum);
    return;
  }
  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      res[depth] = cards[i];
      visited[i] = true;
      permutation(depth + 1);
      visited[i] = false;
    }
  }
}
permutation(0);
console.log(Math.max(...sumResult));
