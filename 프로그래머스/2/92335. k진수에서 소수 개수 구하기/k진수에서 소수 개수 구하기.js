function solution(n, k) {
    let answer = 0
    let array = []
    let newNumber = n.toString(k) 
    
    array = newNumber.split('0')
    
    for (let i=0; i<array.length; i++) {
        let item = Number(array[i])
        if (item && item !== 1) {
            answer += isPrime(item)
        }
    }
    return answer
}
const isPrime = (num) => {
    if (num === 2) return true
    for (let i=2; i<=Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}