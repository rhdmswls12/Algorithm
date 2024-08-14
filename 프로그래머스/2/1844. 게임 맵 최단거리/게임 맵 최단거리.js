function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    let visited = Array.from({length: n}, () => new Array(m).fill(0));
    let dist = Array.from({length: n}, () => new Array(m).fill(0))
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    const q = [[0,0]];
    visited[0][0] = 1;
    dist[0][0] = 1;
    
    while(q.length) {
        let [curX, curY] = q.shift();
        
        for (let i=0; i<4; i++) {
            let [nextX, nextY] = [curX+dx[i], curY+dy[i]];
            
            if (nextX>-1 && nextX<n && nextY>-1 && nextY<m) {
                if (maps[nextX][nextY] && !visited[nextX][nextY]) {
                    dist[nextX][nextY] = dist[curX][curY]+1;
                    visited[nextX][nextY] = 1;
                    q.push([nextX,nextY]);
                }
            }
        }
    }
    return dist[n-1][m-1] ? dist[n-1][m-1] : -1
}