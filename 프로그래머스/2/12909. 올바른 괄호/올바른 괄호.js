function solution(s){
  let stack = []
  
  if (s[0] === ')') return false
  for (let i=0; i<s.length; i++) {
      if (s[i] === ')') {
          stack.pop()
      } else {
          stack.push(s[i])
      }
  }
  return stack.length ? false : true
}