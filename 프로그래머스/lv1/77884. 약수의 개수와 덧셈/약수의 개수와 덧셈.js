function solution(left, right) {
  let numbers = []
  let divisor = {}
  let sum = 0
  for (let i=left; i<=right; i++) {
    numbers.push(i)
  }
  numbers.map(a => {
    divisor[a] = 0
    for (let i=1; i<=a; i++) {
      if (a % i == 0) {
        divisor[a] += 1
      }
    }
  })
  for (const key in divisor) {
    if (divisor[key] % 2) {
      sum += -parseInt(key)
    } else {
      sum += parseInt(key)
    }
  }
  return sum
}