function solution(n) {
    let sum = (n+'').split('').reduce((acc, cur) => acc + parseInt(cur), 0)
    if (n % sum) {
        return false
    } else {
        return true
    }
}