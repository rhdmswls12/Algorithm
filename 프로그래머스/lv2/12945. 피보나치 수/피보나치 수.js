function solution(n) {
  let sum = 0
  let array = [0, 1]
  for (let i=2; i<=n; i++) {
    sum = (array[i-2] + array[i-1]) % 1234567
    array.push(sum)
  }
  return sum
}