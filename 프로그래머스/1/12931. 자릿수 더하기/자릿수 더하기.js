function solution(n) {
    let s = (n + '').split('')
    let answer = s.reduce((acc, cur) => {
        return acc + parseInt(cur)
    },0)
    return answer
}