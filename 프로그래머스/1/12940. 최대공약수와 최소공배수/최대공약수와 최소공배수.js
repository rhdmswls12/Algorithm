function solution(n, m) {
    let gcd = Math.max(...getDivisors(n,m))
    let lcm = Math.min(...getCommonMultiple(n,m))
    return [gcd, lcm]
}
function getDivisors(num1, num2) {
    let arr = []
    for (let i=1; i<=num1; i++) {
        for (let j=1; j<=num2; j++) {
            if (num1%i === 0 && num2%j === 0 && i===j ) arr.push(i)
        }
    }
    return arr
}
function getCommonMultiple(num1, num2) {
    let arr = []
    for (let i=1; i<=num1 * num2; i++) {
        if (i%num1 === 0 && i%num2 === 0) arr.push(i)
    }
    return arr
}