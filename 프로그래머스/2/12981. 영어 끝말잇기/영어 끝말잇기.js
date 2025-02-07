function solution(n, words) {
    let answer = [0, 0];
    let passed = [words[0]];
    
    for (let i=1; i<words.length; i++) {
        let last = passed[passed.length-1];
        
        if (passed.includes(words[i]) 
            || last?.slice(-1) !== words[i][0]) {
            return [i%n+1, Math.floor(i/n)+1];        
        } else {
            passed.push(words[i]);
        }
    }
    return answer;
}