let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let group = input.join('').split('-')

let answer = 0
for (let i=0; i<group.length; i++) {
  let part = group[i].split('+').map(Number).reduce((a, b) => a + b, 0)
  if (i === 0) {
    answer += part
  } else {
    answer -= part
  }
}
console.log(answer)