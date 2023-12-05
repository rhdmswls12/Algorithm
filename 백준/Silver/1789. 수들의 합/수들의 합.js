const input = require('fs').readFileSync('dev/stdin').toString();
let n = Number(input)

let count = 0
let i = 1

while(n) {
  if (n >= i) {
    n -= i
    count++
  } else {
    n += i
    count--
  }
  i++
}
console.log(count)