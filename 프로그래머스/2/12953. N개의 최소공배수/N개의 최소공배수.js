function solution(arr) {
  let stack = [...arr]
  
  while(stack.length !== 1) {
      let result = getLcd(stack.pop(), stack.pop())
      stack.push(result)
  }
  return stack[0]
}
const getLcd = (num1, num2) => {
    let lcd = 1
    while(true) {
        if (lcd % num1 === 0 && lcd % num2 === 0) {
            break
        }
        lcd++
    }
    return lcd
}