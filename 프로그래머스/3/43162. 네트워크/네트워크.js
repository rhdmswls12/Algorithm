function solution(n, computers) {
    let count = 0;
    
    const visited = Array(n).fill(false);
    
    const bfs = (node) => {
        const queue = [node];
        
        visited[node] = true;
        
        while(queue.length) {
            const cur = queue.shift();
            
            for (let next=0; next<n; next++) {
                if (computers[cur][next] && !visited[next]) {
                    queue.push(next);
                    visited[next] = true;
                }
            }
        }
    }
    
    for (let i=0; i<n; i++) {
        if (!visited[i]) {
            bfs(i);
            count++;
        }
    }
    
    return count; 
}