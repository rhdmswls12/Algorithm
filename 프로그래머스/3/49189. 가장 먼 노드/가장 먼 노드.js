function solution(n, edge) {
    const visited = Array(n + 1).fill(false);
    const dist = Array(n + 1).fill(0);
    const queue = [1];
    const graph = {};
    let idx = 0;
    
    visited[1] = true;
    
    for (let i=1; i<=n; i++) {
        graph[i] = [];
    }
    
    for (const [u, v] of edge) {
        graph[u].push(v);
        graph[v].push(u);
    }
    
    while (idx < queue.length) {
        const node = queue[idx++];
        
        for (const next of graph[node]) {
            if (!visited[next]) {
                queue.push(next);
                visited[next] = true;
                dist[next] = dist[node] + 1;
            }
        }
    }
    
    const maxLength = Math.max(...dist);
    
    return dist.filter(d => d === maxLength).length;
}