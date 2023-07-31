function solution(n) {
  let array = [0, 1, 2] 

  for (let i=3; i<=n; i++) {
    array.push((array[i-1] + array[i-2]) % 1234567)
  }
  return array[n]
}