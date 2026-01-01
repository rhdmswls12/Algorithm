function solution(x, y, n) {
    const queue = [[x, 0]];
    const visited = new Set();
    let idx = 0;
    visited.add(x);
    
    while (idx < queue.length) {
        const [cur, count] = queue[idx++];
        
        if (cur === y) return count;
        
        for (const next of [cur + n, cur * 2, cur * 3]) {
            if (!visited.has(next) && next <= y) {
                visited.add(next);
                queue.push([next, count+1]);
            }
        }
    }
    return -1;
}