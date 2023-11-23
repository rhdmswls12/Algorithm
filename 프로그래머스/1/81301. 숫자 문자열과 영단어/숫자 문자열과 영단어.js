function solution(s) {
    let answer = ''
    let numbers = {
        'zero': '0',
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9'
    }
    let str = ''
    for (let i=0; i<=s.length; i++) {
        for (const key in numbers) {
            if (str === key || str === numbers[key]) {
                answer += numbers[key]
                str = ''
            }
        }
        str += s[i]
    }
    return Number(answer)
}