function solution(n) {
    let toBinary = n.toString(2)
    let countOne = 0
    let answer = 0
    
    for (let i=0; i<toBinary.length; i++) {
        if (toBinary[i] === '1') countOne++ 
    }
    for (let i=n+1; i<1000000; i++) {
        if (check(i) === countOne) {
            answer = i
            break
        }
    }
    return answer
}
const check = (num) => {
    let numToBinary = num.toString(2)
    let one = 0
    for (let i=0; i<numToBinary.length; i++) {
        if (numToBinary[i] === '1') one++
    }
    return one
}