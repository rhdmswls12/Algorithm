function solution(n, edge) {
    const list = {};
    const visited = Array(n + 1).fill(false);
    const distance = Array(n + 1).fill(0);
    const queue = [1];
    
    visited[1] = true;
    
    for (let i=1; i<=n; i++) {
        list[i] = [];
    }
    
    for (const [u, v] of edge) {
        list[u].push(v);
        list[v].push(u);
    }
    
    while(queue.length) {
        const node = queue.shift();
        
        for (const next of list[node]) {
            if (!visited[next]) {
                visited[next] = true;
                distance[next] = distance[node] + 1;
                queue.push(next);
            }
        }
    }
    
    const maxDist = Math.max(...distance);
    
    return distance.filter(d => d === maxDist).length;
}

