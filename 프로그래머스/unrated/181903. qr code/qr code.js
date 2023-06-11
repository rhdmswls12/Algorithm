function solution(q, r, code) {
  let string = []
  let result = []
  string = code.split('')
  string.map((a, i) => {
    if (i % q == r) {
      result.push(a)
    }
  })
  return(result.join(''))
}