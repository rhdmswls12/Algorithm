function solution(n, results) {
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
    
    const bfs = (graph, start) => {
        const visited = Array(n + 1).fill(false);
        const queue = [start];
        visited[start] = true;
        let count = 0;
        
        while(queue.length) {
            const node = queue.shift();
            
            for (const next of graph[node]) {
                if (!visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                    count++;
                }
            }
        }
        
        return count;
    }
    
    let answer = 0;
    
    for (let i=1; i<=n; i++) {
        const winCount = bfs(win, i);
        const loseCount = bfs(lose, i);
        
        if (winCount + loseCount === n - 1) answer++;
    }
    
    return answer;
}
// 1. 그래프 2개 만들기
// 정방향(win -> lose)
// 역방향(lose -> win)
// 2. bfs로 각각 도달 가능한 노드 개수 세기
// 3. 두 개 합이 n-1이면 순위 확정

// 이긴 기준
// 1: 2
// 2: 5 확정
// 3: 2
// 4: 2, 3
// 5: x

// 진 기준
// 1: x
// 2: 4 3 1 확정
// 3: 4
// 4: x
// 5: 2