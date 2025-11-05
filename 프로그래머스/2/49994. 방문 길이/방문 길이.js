function solution(dirs) {
    const move = {
        U: [0, 1],
        D: [0, -1],
        L: [-1, 0],
        R: [1, 0],
    };
    let x = 0, y = 0;
    let visited = new Set();
    
    for (let dir of dirs) {
        const [dx, dy] = move[dir];
        
        const nx = x + dx;
        const ny = y + dy;
        
        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;
        
        visited.add(`${x} ${y} ${nx} ${ny}`);
        visited.add(`${nx} ${ny} ${x} ${y}`);
        
        x = nx;
        y = ny;
        
    }
    return visited.size / 2
}