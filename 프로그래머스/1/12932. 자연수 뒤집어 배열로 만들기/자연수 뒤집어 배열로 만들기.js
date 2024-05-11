function solution(n) {
    let s = (n + '').split('').reverse()
    let answer = s.map(str => parseInt(str))
    return answer
}