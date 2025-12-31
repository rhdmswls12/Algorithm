function solution(maps) {
    const w = maps[0].length - 1;
    const h = maps.length - 1;
    const dx = [0, 0, -1, 1];
    const dy = [1, -1, 0, 0];
    const queue = [[0, 0, 1]];
    
    while (queue.length) {
        const [x, y, move] = queue.shift();
        
        if (x === w && y === h) return move;
        
        for (let i=0; i<4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if (nx >= 0 && nx <= w && ny >= 0 && ny <= h && maps[ny][nx]) {
                maps[ny][nx] = 0;
                queue.push([nx, ny, move + 1]);
            }
        }
    }
    return -1;
}