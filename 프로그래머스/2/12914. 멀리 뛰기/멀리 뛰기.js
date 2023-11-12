function solution(n) {
  let f = [0, 1, 2]
  for (let i=3; i<=n; i++) {
      f[i] = (f[i-2] + f[i-1]) % 1234567
  }
  return f[n]
}