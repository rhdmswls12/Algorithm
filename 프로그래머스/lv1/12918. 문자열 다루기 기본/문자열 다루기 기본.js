function solution(s) {
  let result = true
  let array = s.split('')
  if (array.length != 4 && array.length != 6) {
    result = false
  } else {
    array.map(a => {
      if (isNaN(parseInt(a))) {
        result = false
      }
    })
  }
  return result
}