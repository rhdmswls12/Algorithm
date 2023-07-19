function solution(s) {
  let array = s.split('')
  let stack = []
  
  for (let i=0; i<array.length; i++) {
    stack.push(array[i])
    if (stack[stack.length - 2] == stack[stack.length - 1]) { 
      stack.pop()
      stack.pop()  
    }
  }
  if (stack.length) {
    return 0
  } else {
    return 1
  }
}