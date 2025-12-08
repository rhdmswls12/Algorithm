function solution(x, y, n) {
    const queue = [[x, 0]];
    const visited = new Set([x]);
    let idx = 0;
    
    while (idx < queue.length) {
        const [current, count] = queue[idx++];
        
        if (current === y) return count;
        
        for (const option of [current+n, current*2, current*3]) {

            if (option <= y && !visited.has(option)) {
                visited.add(option);
                queue.push([option, count+1]);
            }
        }
    }
    return -1;
}