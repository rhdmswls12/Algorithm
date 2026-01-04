function solution(k, dungeons) {
    const visited = Array(dungeons.length).fill(false);
    let maxCount = 0;
    
    function dfs(k, count) {
        maxCount = Math.max(maxCount, count);
        
        for (let i=0; i<dungeons.length; i++) {
            const [need, consume] = dungeons[i];
            
            if (k < need) continue;
            
            if (!visited[i])  {
                visited[i] = true;
                dfs(k-consume, count+1);
                visited[i] = false;
            }
        }
    }
    
    dfs(k, 0);
    return maxCount;
}