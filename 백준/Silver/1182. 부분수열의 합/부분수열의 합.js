const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input2.txt")
  .toString()
  .trim()
  .split("\n");
let [N, M] = input[0].split(" ").map(Number);
let numbers = input[1].split(" ").map(Number);
let visited = new Array(N).fill(0);
let count = 0;

function makeSubset(index, sum) {
  if (index == N) {
    if (sum == M) count++;
    return;
  }
  visited[index] = true;
  makeSubset(index + 1, sum + numbers[index]);
  visited[index] = false;
  makeSubset(index + 1, sum);
}
makeSubset(0, 0);
if (M == 0) console.log(count - 1);
else console.log(count);
