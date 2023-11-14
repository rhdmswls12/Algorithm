function solution(n, words) {
    let answer = [0, 0]
    let passed = [words[0]] 
    
    for (let i=1; i<words.length; i++) {
        let prev = passed[passed.length-1]
        let same = passed.findIndex(pass => pass === words[i])
        if (prev.slice(-1) !== words[i].slice(0,1) || same !== -1) {
            answer[0] = (i%n) + 1
            answer[1] = Math.ceil((i+1) / n)
            return answer
        } else {
            passed.push(words[i])
        }
    }
    return answer
}