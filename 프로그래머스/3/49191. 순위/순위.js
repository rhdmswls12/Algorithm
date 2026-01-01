function solution(n, results) {
    let count = 0;
    const win = {};
    const lose = {};
    
    for (let i=1; i<=n; i++) {
        win[i] = [];
        lose[i] = [];
    }
    
    for (const [u, v] of results) {
        win[u].push(v);
        lose[v].push(u);
    }
    
    for (let i=1; i<=n; i++) {
        if (bfs(i, win) + bfs(i, lose) === n - 1) count++;
    }
    
    return count;
    
    function bfs(start, list) {
        const visited = Array(n + 1).fill(false);
        const queue = [start];
        visited[start] = true;
        let count = 0;
        let idx = 0;
        
        while (idx < queue.length) {
            const node = queue[idx++];
            
            for (const next of list[node]) {
                if (!visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                    count++;
                }
            }
        }
        return count;
    }
}