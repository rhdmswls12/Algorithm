function solution(maps) {
  const xLen = maps.length;
  const yLen = maps[0].length;
  const goalX = xLen - 1;
  const goalY = yLen - 1;
  const dx = [-1, 1, 0, 0]
  const dy = [0, 0, 1, -1]
  const q = [];
  q.push([0, 0, 1])

  while(q.length) {
    const [x, y, move] = q.shift(); // 배열의 맨 앞의 값 제거
    if (x === goalX && y === goalY) return move; // 목표 지점에 도착한 경우 이동한 거리 반환
    // 목표 지점에 도착하지 않은 경우
    for (let i=0; i<4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >=0 && nx < xLen && ny >=0 && ny < yLen && maps[nx][ny] === 1) {
        q.push([nx, ny, move + 1])
        maps[nx][ny] = 0
      }
    }
  }
  return -1;
}