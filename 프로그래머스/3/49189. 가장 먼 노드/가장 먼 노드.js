function solution(n, edge) {
    let answer = 0;
    const graph = Array.from(Array(n+1), () => []);
    
    for (let [a, b] of edge) {
        graph[a].push(b);
        graph[b].push(a);
    }
    
    const bfs = (graph, startNode) => {
        const queue = [1];
        const distance = Array(n+1).fill(-1);
        distance[1] = 0;
        
        while(queue.length) {
            const node = queue.shift();
            for (let next of graph[node]) {
                if (distance[next] === -1) {
                    distance[next] = distance[node] + 1;
                    queue.push(next);
                }
            }
        }
        
        const maxDistance = Math.max(...distance);
        answer = distance.filter(d => d === maxDistance).length;
    }
    bfs(graph, 1);
    return answer;
}