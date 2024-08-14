const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const miro = input.map((el) => el.split("").map(Number));
const visited = Array.from({ length: N }, () => new Array(M).fill(0));
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const q = [[0, 0]];
visited[0][0] = 1;

while (q.length) {
  let [currX, currY] = q.shift();

  for (let i = 0; i < 4; i++) {
    let [nextX, nextY] = [currX + dx[i], currY + dy[i]];

    if (nextX > -1 && nextX < N && nextY > -1 && nextY < M) {
      if (miro[nextX][nextY] && !visited[nextX][nextY]) {
        visited[nextX][nextY] = visited[currX][currY] + 1;
        q.push([nextX, nextY]);
      }
    }
  }
}
console.log(visited[N - 1][M - 1]);
