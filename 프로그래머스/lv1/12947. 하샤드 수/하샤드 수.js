function solution(n) {
  let str = n.toString().split('')
  let test = 0
  str.map(a => {
    test += parseInt(a)
  })
  if (n % test == 0) {
    return true
  } else {
    return false
  }
}