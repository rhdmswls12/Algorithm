function solution(n) {
    let answer = 0
    while(n) {
        if (n%2) {
            n--
            answer++
        } else {
            n/=2
        }
    }
    return answer
}