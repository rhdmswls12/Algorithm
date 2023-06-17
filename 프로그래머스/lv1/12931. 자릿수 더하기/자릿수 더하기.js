function solution(n) {
  let string = n.toString()
  let arr = string.split('')
  let numArray = []
  arr.map((a, i) => {
    numArray.push(parseInt(a))
  })
  const sum = numArray.reduce((acc, cur) => (acc + cur), 0)
  return sum
}