function solution(n, m) {
    let gcd = Math.max(...getDivisors(n,m))
    return [gcd, n*m / gcd]
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