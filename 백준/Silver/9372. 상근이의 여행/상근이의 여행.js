function solution(N, M, graph) {
  const visited = new Array(N + 1).fill(false); // 국가를 방문했는지 체크 용도
  visited[1] = true; // 첫 번째 국가를 방문처리

  const queue = [1]; // 시작 정점을 포함한 큐 자료구조 생성

  let count = 0;

  // BFS 로직
  while (queue.length) {
    const current = queue.shift(); // 1. 현재 머물고 있는 국가의 정보를 가져온다.

    // 2. 현재 머물고 있는 국가에서 인접해 있는 다른 국가의 정보를 가져온다.
    for (const next of graph[current]) {
      // 3. 인접해 있는 국가를 아직 방문하지 않은 상태인 경우
      if (!visited[next]) {
        // 4. 방문하지 않은 국가인 경우 방문처리와 카운트 증가와 큐에 국가 삽입
        visited[next] = true;
        count += 1;
        queue.push(next);
      }
    }
  }

  return count;
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]); // 테스트 케이스 T = 2

/*

T = 1 / N, M [3, 3]
국가와 비행기
1 2
2 3
1 3

T = 2 / N, M [5, 4]
2 1
2 3
4 3
4 5

*/

// const [N, M] = input.shift().split(" ").map(Number);
// const flights = input.map((el) => el.split(" ").map(Number));

let result = "";
let idx = 1;

for (let i = 0; i < T; i++) {
  const [N, M] = input[idx++].split(" ").map(Number);
  const graph = Array.from({ length: N + 1 }, () => []);

  // 간선의 가중치 값이 없는 무방향 그래프를 표현하는 코드
  for (let j = 0; j < M; j++) {
    const [from, to] = input[idx++].split(" ").map(Number);
    graph[from].push(to);
    graph[to].push(from);
  }

  result += solution(N, M, graph) + "\n";
}

console.log(result);
