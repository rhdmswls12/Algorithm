function solution(n) {
  let result = 0
  for (let i=1; i<=n; i++) {
    if (i**2 == n) {
      result = (i+1) ** 2
      break;
    } else {
      result = -1
    }
  }
  return result
}