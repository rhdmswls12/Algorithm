function solution(n) {
  let str = n.toString()
  let strArray = str.split('')
  let numArray = []
  let result = 0
  strArray.forEach(s => {
    numArray.push(parseInt(s))
  })
  numArray.sort((a, b) => b - a)
  result = numArray.join('')
  return(parseInt(result))
}