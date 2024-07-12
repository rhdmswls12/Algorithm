const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
let [N, M] = input[0].split(" ").map(Number);
let numbers = [];
let visited = Array(N).fill(0);
let res = Array(M).fill(0);
for (let i = 1; i <= N; i++) {
  numbers.push(i);
}

function permutation(depth) {
  if (depth == M) {
    console.log(res.join(" "));
    return;
  }
  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      res[depth] = numbers[i];
      visited[i] = true;
      permutation(depth + 1);
      visited[i] = false;
    }
  }
}
permutation(0);
