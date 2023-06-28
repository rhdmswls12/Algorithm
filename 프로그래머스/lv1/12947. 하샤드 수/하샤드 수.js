function solution(n) {
  let str = n.toString().split('')
  let test = 0
  str.map(a => {
    test += parseInt(a)
  })
  return(n % test == 0)
}