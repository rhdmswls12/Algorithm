function solution(s) {
    let count = 0
    let result = 0
    s = s.split('')
    
    for (let i=0; i<s.length; i++) {
        let curr = s.shift()
        s.push(curr)
        result += judje(s)
    }
    return result
}
const judje = (arr) => {
    let stack = []
    let count = 0
    let object = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    for (let i=0; i<arr.length; i++) {
        if (object[stack[stack.length-1]] === arr[i]) {
            stack.pop()
        } else {
            stack.push(arr[i])
        }
    }
    if (!stack.length) count++
    
    return count
}