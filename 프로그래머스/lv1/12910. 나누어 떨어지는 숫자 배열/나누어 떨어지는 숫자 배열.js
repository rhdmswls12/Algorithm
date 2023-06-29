function solution(arr, divisor) {
  let result = []
  arr.map(a => {
    if (a % divisor == 0) {
      result.push(a)
    }
  })
  if (result.length) {
    result.sort((a, b) => a - b)
  } else {
    result.push(-1)
  }
  return result
}