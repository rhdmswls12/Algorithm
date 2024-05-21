function solution(d, budget) {
    while (d.length) {
        let max = Math.max(...d)
        let sum = d.reduce((acc, cur) => acc + cur, 0)
        if (sum <= budget) {
            return d.length
        } else {
            d.splice(d.indexOf(max),1)
        }
    }
    return d.length
}