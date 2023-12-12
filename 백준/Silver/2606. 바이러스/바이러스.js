const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]) // 정점의 개수
let m = Number(input[1]) // 간선의 개수
let graph = [] // 그래프 정보 입력

for (let i=1; i<=n; i++) {
  graph[i] = []
}
for (let i=2; i<=m+1; i++) {
  let [x, y] = input[i].split(' ').map(Number)
  graph[x].push(y)
  graph[y].push(x)
}
let count = 0
let visited = new Array(n+1).fill(false)
function dfs(x) {
  visited[x] = true
  count++
  for (y of graph[x]) {
    if (!visited[y]) dfs(y)
  }
}
dfs(1)
console.log(count-1)