function solution(n) {
  let sum = 0
  for (let i=1; i<=n; i++) {
    if (n % i) {
      continue;
    } else {
      sum += i;
    }
  }
  return sum
}