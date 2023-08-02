function solution(d, budget) {
  let total = d.reduce((acc, cur) => (acc + cur), 0)
  d = d.sort((a, b) => b - a)
  if (total <= budget) {
    return d.length
  }
  while (total > budget) {
    let i=0
    if (total <= budget) {
      break
    }
    total = total-d[i]
    d.splice(i, 1)
    i++
  }
  return d.length
}