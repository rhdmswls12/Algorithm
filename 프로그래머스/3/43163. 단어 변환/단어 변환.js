function solution(begin, target, words) {
    const queue = [[begin, 0]];
    const visited = new Set();
    let idx = 0;
    visited.add(begin);
    
    if (!words.includes(target)) return 0;
    
    while (idx < queue.length) {
        const [cur, count] = queue[idx++];
        
        if (cur === target) return count;
        
        for (const next of words) {
            if (!visited.has(next) && isPossible(cur, next)) {
                visited.add(next);
                queue.push([next, count + 1]);
            }
        }
    }
}
function isPossible(word1, word2) {
    let count = 0;
    
    for (let i=0; i<word1.length; i++) {
        if (word1[i] !== word2[i]) {
            count++;
        }
    }
    
    return count === 1;
}