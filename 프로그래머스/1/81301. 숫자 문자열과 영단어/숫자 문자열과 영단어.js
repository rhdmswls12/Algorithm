function solution(s) {
    let str = s.split('')
    let sum = ''
    let answer = ''
    let numbers1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let numbers2 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    
    for (let i=0; i<=str.length; i++) {
        let number1 = numbers1.findIndex((num) => num === sum)
        let number2 = numbers2.findIndex((num) => num === sum)
        if (number1 !== -1) {
            answer += number1
            sum = ''
        } else if (number2 !== -1) {
            answer += number2
            sum = ''
        } 
        sum += str[i]
        
    }
    return parseInt(answer)
}