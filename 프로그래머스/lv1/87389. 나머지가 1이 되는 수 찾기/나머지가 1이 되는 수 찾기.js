function solution(n) {
  let result = []
  for (let x=1; x<999999; x++) {
    if (n % x == 1) {
      result.push(x)
    }
  }
  return(result[0])
}