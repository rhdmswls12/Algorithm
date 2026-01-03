function solution(k, dungeons) {
  let maxCount = 0;
  const visited = Array(dungeons.length).fill(false);

  function dfs(fatigue, count) {

    maxCount = Math.max(maxCount, count);

    for (let i = 0; i < dungeons.length; i++) {
      const [need, cost] = dungeons[i];

      if (visited[i]) continue;
      if (fatigue < need) continue;

      visited[i] = true;
      dfs(fatigue - cost, count + 1);
      visited[i] = false;
    }
  }

  dfs(k, 0);
  return maxCount;
}
