const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const N = Number(input.shift());
const graph = input.map((el) => el.split(" ").map(Number));

const edges = [];
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if (graph[i][j]) {
      edges.push([i + 1, j + 1, graph[i][j]]);
    }
  }
}

function kruskal(N, arr) {
  function getParent(set, x) {
    if (set[x] == x) return x;
    return (set[x] = getParent(set, set[x]));
  }

  function unionParent(set, a, b) {
    a = getParent(set, a);
    b = getParent(set, b);

    if (a < b) set[b] = a;
    else set[a] = b;
  }

  function findParent(set, a, b) {
    a = getParent(set, a);
    b = getParent(set, b);

    if (a == b) return true;
    else return false;
  }

  arr.sort((a, b) => a[2] - b[2]);
  const set = new Array(N);
  for (let i = 1; i <= N; i++) {
    set[i] = i;
  }

  let coast = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!findParent(set, arr[i][0], arr[i][1])) {
      coast += arr[i][2];
      unionParent(set, arr[i][0], arr[i][1]);
    }
  }
  return coast;
}
const result = kruskal(N, edges);
console.log(result);
