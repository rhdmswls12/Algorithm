function solution(word) {
    let count = 0;
    let alphabet = ['A', 'E', 'I', 'O', 'U'];
    
    function dfs(cur) {
        if (cur.length > 0) count++;
        
        if (cur === word) return true;
        
        if (cur.length === 5) return false;
        
        for (const a of alphabet) {
            if (dfs(cur + a)) return true;
        }
        
        return false;
    }
    
    dfs("");
    return count;
}