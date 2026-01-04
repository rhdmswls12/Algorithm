function solution(user_id, banned_id) {
    const visited = new Set();
    const result = new Set();

    function dfs(idx) {
        if (idx === banned_id.length) {
            const key = [...visited].sort().join(",");
            result.add(key);
            return;
        }
        for (let i=0; i<user_id.length; i++) {
            if (!visited.has(user_id[i]) && isCorrect(user_id[i], banned_id[idx])) {
                visited.add(user_id[i]);
                dfs(idx + 1);
                visited.delete(user_id[i]);
            }
        }
    }
    
    dfs(0);
    return result.size;
}

function isCorrect(id, banned_id) {
    if (id.length !== banned_id.length) return false;
    
    for (let i=0; i<id.length; i++) {
        if (id[i] !== banned_id[i]) {
            if (banned_id[i] !== '*') return false;
        }
    }
    return true;
}