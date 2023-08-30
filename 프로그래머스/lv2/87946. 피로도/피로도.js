function solution(k, dungeons) {
  let answer = 0
  let lengthOfDun = dungeons.length
  let visited = new Array(lengthOfDun).fill(0)
  
  const dfs = (k, count) => {
    for (let i=0; i<lengthOfDun; i++) {
      if (k >= dungeons[i][0] && !visited[i]) {
        visited[i] = 1
        dfs(k-dungeons[i][1], count+1)
        visited[i] = 0
      }
    } 
    answer = Math.max(answer, count)
  }
  dfs(k, 0);
  return answer
}