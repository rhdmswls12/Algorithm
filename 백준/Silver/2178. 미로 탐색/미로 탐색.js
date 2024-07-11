const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
let [N, M] = input[0].split(" ");
N = Number(N);
M = Number(M);
let arr = input.slice(1).map((element) => element.split("").map(Number)); // 미로

let dist = Array.from({ length: N }, () => new Array(M).fill(0));
dist[0][0] = 1;

let dx = [1, -1, 0, 0];
let dy = [0, 0, -1, 1];
let q = [[0, 0]];

while (q.length) {
  let [curX, curY] = q.shift();

  // let a = q.shift();
  // let curX = a[0];
  // let curY = a[1];

  // console.log(curX, curY);

  // let move = a[2];

  for (let i = 0; i < 4; i++) {
    let [nextX, nextY] = [curX + dx[i], curY + dy[i]];

    // curX = curX + dx[i];
    // curY = curY + dy[i];

    // console.log(nextX, nextY);

    // console.log();
    // console.log(curX, curY);

    if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= M) continue;
    if (!dist[nextX][nextY] && arr[nextX][nextY]) {
      dist[nextX][nextY] = dist[curX][curY] + 1;
      q.push([nextX, nextY]);
    }

    // if (curX == M && curY == N) return move;
    // if (arr[curX][curY] == 1 && (curX < 0 || curX > M || curY < 0 || curY > N))
    // arr[curX][curY] = 0;
    // q.push([curX, curY, move + 1]);
  }
}

console.log(dist[N - 1][M - 1]);
