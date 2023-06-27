function solution(n) {
  let numArray = []
  let string = n.toString().split('')
  string.map(a => {
    numArray.push(parseInt(a))
  })
  return numArray.reverse()
}