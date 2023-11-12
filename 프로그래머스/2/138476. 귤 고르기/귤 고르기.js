function solution(k, tangerine) {
  let type = {}
  let sorted = []
  let sum = 0
  let count = 0
  
  tangerine.forEach(item => {
      if (type[item]) {
          type[item] += 1
      } else {
          type[item] = 1
      }
  })
  
  sorted = Object.values(type).sort((a, b) => b - a)
  for (let i=0; i<sorted.length; i++) {
      if (sum >= k) break
      sum += sorted[i]
      count++
  }
  return count
}