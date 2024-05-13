function solution(n) {
    let sqrt = Math.sqrt(n)
    if (sqrt % 1) {
        return -1
    } else {
        return (sqrt + 1) ** 2
    }
}