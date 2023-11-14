function solution(n) {
    let usage = 0
    while(n) {
        if (n % 2) {
            n--
            usage++
        } else {
            n /= 2
        }
    }
    return usage
}