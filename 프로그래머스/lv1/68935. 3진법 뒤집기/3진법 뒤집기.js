function solution(n) {
  let ternary = n.toString(3).split('')
  let decimal = ternary.reverse()
  let toNumber = []
  decimal.map(a => {
    toNumber.push(parseInt(a))
  })
  return parseInt(decimal.join(''),3)
}