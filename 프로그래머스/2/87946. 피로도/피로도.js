function solution(k, dungeons) {
    let maxCount = 0;
    const permutations = permute(dungeons);
    
    for (const p of permutations) {
        let cur = k;
        let count = 0;
        for (const [need, consume] of p) {
            if (cur >= need) {
                cur -= consume;
                count++;
            } else {
                break;
            }
        }
        maxCount = Math.max(maxCount, count);
    }
    return maxCount;
}

function permute(arr) {
    let result = [];
    const visited = Array(arr.length).fill(false);
    
    function backtrack(path) {
        if (path.length === arr.length) {
            result.push([...path]);
            return;
        }
        
        for (let i=0; i<arr.length; i++) {
            if (visited[i]) continue;
            visited[i] = true;
            path.push(arr[i]);
            backtrack(path);
            path.pop();
            visited[i] = false;
        }
    }
    backtrack([]);
    return result;
}