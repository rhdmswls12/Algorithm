const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
let idx = 1;
for (let i = 0; i < T; i++) {
  const [N, M] = input[idx++].split(" ").map(Number); // 국가 수, 비행기 종류
  const graph = Array.from(Array(N + 1), () => new Array());
  let answer = 0;

  for (let j = 0; j < M; j++) {
    // 인접 리스트
    const [from, to] = input[idx++].split(" ").map(Number);
    graph[from].push(to);
    graph[to].push(from);
  }

  answer = solution(N, M, graph);
  console.log(answer);
}

function solution(N, M, graph) {
  // BFS
  let visited = Array(N + 1).fill(false);
  let count = 0;
  let q = [1];
  visited[1] = true;

  while (q.length) {
    let curr = q.shift();

    for (let next of graph[curr]) {
      if (!visited[next]) {
        visited[next] = true;
        count++;
        q.push(next);
      }
    }
  }
  return count;
}
