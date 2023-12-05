const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let a = Number(input[0])
let b = Number(input[1])

let count = 1

while (b !== a) {
  if (b < a) {
    count = -1
    break
  }
  if ( b % 2 === 0) {
    b /= 2
  } else {
    b = (b - 1) / 10
  }
  count++
}
console.log(count)