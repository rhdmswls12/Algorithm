function solution(left, right) {
    let sum = 0
    for (let i=left; i<=right; i++) {
        const result = getDivisors(i)
        if (result) {
            sum -= i
        } else {
            sum += i
        }
    }
    return sum
}
function getDivisors(n) {
    let cnt = 0
    for (let i=1; i<=n; i++) {
        if (n % i == 0) cnt++ 
    }
    return cnt % 2 ? true : false
}