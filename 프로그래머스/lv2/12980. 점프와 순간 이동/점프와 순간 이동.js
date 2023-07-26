function solution(n) {
  let usage = 0

  while (n > 0) {
    if (n % 2) {
      n = n - 1
      usage++
    } else {
      n /= 2
    }
  }
  return usage
}