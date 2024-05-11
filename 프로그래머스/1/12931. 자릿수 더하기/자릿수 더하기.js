function solution(n) {
    let answer = 0
    let s = n.toString().split('')
    s.forEach(str => {
        answer += parseInt(str)
    })
    return answer
}