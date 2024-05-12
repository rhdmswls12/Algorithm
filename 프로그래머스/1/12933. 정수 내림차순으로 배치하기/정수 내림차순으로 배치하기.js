function solution(n) {
    let answer = 0
    let str = (n + '').split('').sort((a,b) => b - a).join("")
    answer = parseInt(str)
    return answer
}