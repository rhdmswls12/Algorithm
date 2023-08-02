function solution(s) {
  let array = s.split('')
  let bracketArray = []
  let result = 0
  let bracket = {
    '(' : -1,
    ')' : 1,
    '{' : -2,
    '}' : 2,
    '[' : -3,
    ']' : 3
  }
  for (let i=0; i<array.length; i++) {
    for (let key in bracket) {
      if (array[i] == key) {
        bracketArray.push(bracket[key])
      }
    }
  }
  let sum = bracketArray.reduce((acc, cur) => (acc + cur), 0)
  if (sum != 0) {
    return 0
  }

  const testByStack = (arr) => {
    let stack = []
    if (arr[0] > 0 || arr[arr.length -1] < 0) {
      return 0
    } 
    for (let i=0; i<arr.length; i++) {
      if ((stack[stack.length-1] < 0 && arr[i] > 0) && (stack[stack.length-1] + arr[i] == 0)) {
        stack.pop()
      } else {
        stack.push(arr[i])
      }
    }
    if (stack.length == 0) {
      result++
    }
  }

  testByStack(bracketArray)

  for (let i=0; i<bracketArray.length-1; i++) {
    let first = bracketArray.shift()
    bracketArray.push(first)
    testByStack(bracketArray)
  }
  return result
}