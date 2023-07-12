function solution(s){
  let count = 0
  let array = s.split('')

  array.map((a, i) => {
    if (count < 0) {
      return false
    }
    if (a == '(') {
      count++
    } else {
      count--
    }
  })
  if (count == 0) {
    return true
  } else {
    return false
  }
}