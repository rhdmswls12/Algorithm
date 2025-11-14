function solution(m, n, puddles) {
    const dp = Array.from({length: n+1}, () => Array(m+1).fill(0));
    dp[1][1] = 1;
    
    for (const [px, py] of puddles) {
        dp[py][px] = -1;
    }
    
    for (let y=1; y<=n; y++) {
        for (let x=1; x<=m; x++) {
            if (y === 1 && x === 1) continue;
            
            if (dp[y][x] === -1) {
                dp[y][x] = 0;
                continue;
            }
            
            dp[y][x] = (dp[y-1][x] + dp[y][x-1]) % 1000000007
        }
    }
    return dp[n][m];
}