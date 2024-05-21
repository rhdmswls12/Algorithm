function solution(d, budget) {
    d.sort((a, b) => a - b)
    while (d.length) {
        let sum = d.reduce((acc, cur) => acc + cur, 0)
        if (sum <= budget) {
            return d.length
        } else {
            d.splice(-1)
        }
    }
    return d.length
}