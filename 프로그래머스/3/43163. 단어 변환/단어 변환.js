function solution(begin, target, words) {
    let answer = 0;
    let visited = new Set();
    
    if (!words.includes(target)) return 0;

    const queue = [begin];

    const compare = (word1, word2) => {
        let count = 0;
        
        for (let i=0; i<word1.length; i++) {
            if (word1[i] !== word2[i]) count++;
        }
        
        return count === 1 ? true : false;
    }
    
    while (queue.length) {
        const levelSize = queue.length;
        
        for (let i=0; i<levelSize; i++) {
            const cur = queue.shift();
            
            if (cur === target) return answer;
        
            for (const next of words) {
                if (!visited.has(next) && compare(cur, next)) {
                    visited.add(next);
                    queue.push(next);
                }
            }
        }
        
        answer++;
    }
    
    return answer;
}