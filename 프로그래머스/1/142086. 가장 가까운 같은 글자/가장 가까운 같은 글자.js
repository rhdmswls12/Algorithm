function solution(s) {
    let str = s.split('')
    let arr = []
    let answer = []
    for (let i=0; i<str.length; i++) {
        let word = str.slice(0, i)
        let matched = word.indexOf(s[i])
        if (matched !== -1) {
            str[matched] = '0'
            answer.push(i-matched)
        } else {
            answer.push(-1)
        }
    }
    return answer
}