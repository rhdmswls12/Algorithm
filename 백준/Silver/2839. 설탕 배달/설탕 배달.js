let input = require('fs').readFileSync('/dev/stdin').toString();
let n = Number(input)
let count = 0

while(n) {
  if (n < 0) {
    count = -1
    break
  }
  if (n % 5) {
    n -= 3
    count++
  } else {
    count += n/5
    break
  }
}
console.log(count)