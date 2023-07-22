function solution(s) {
  let array = s.split('')
  let upper = []
  let lower = []
  let result = ''

  array.map(a => {
    if ((a.charCodeAt() >= 65) && (a.charCodeAt() <= 90)) {
      upper.push(a)
    } else {
      lower.push(a)
    }
  })
  
  lower.sort().reverse()
  upper.sort().reverse()
  
  result = lower.join('') + upper.join('')
  return result
}