function solution(s){
  let string = s.split('')
  let countP = 0
  let countY = 0
  string.forEach((str) => {
    if (str.toUpperCase() == 'P') {
      countP += 1
    } else if (str.toUpperCase() == 'Y') {
      countY += 1
    }
  })
  if (countP == countY) {
    return true
  } else {
    return false
  }
}