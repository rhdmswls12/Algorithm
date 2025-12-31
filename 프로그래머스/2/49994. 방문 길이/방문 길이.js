function solution(dirs) {
    const move = {
        U: [0, 1],
        D: [0, -1],
        R: [1, 0],
        L: [-1, 0]
    };
    const visited = new Set();
    let [x, y] = [0, 0];
    
    for (const dir of dirs) {
        const [dx, dy] = move[dir];
        let nx = x + dx;
        let ny = y + dy;

        if (nx >= -5 && nx <=5 && ny >= -5 && ny <= 5) {
            visited.add(`[${[x]}, ${y}] [${nx}, ${ny}]`);
            visited.add(`[${nx}, ${ny}] [${x}, ${y}]`);
            
            x = nx;
            y = ny;
        }
    }
    return visited.size / 2;
}