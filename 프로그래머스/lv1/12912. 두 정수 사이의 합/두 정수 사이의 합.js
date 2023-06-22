function solution(a, b) {
  let array = []
  let result = 0
  if (a == b) {
    array.push(a)
  } else if (a > b) {
    for (let i=a; i>=b; i--) {
      array.push(i)
    }
  } else {
    for (let i=a; i<=b; i++) {
      array.push(i)
    }
  }
  result = array.reduce((acc, cur) => (acc + cur), 0)
  return result
  
}