function solution(k, tangerine) {
  let object = {}
  let result = []
  tangerine.forEach(a => {
    !object[a] ? object[a] = 1 : object[a]++
  })
  
  let sorted = []
  for (let name in object) {
    sorted.push([name, object[name]])
  }
  sorted.sort((a, b) => b[1] - a[1])
  
  for (let i=0; i<sorted.length; i++) {
    k = k-sorted[i][1]
    result.push(sorted[i][0])
    if (k<=0) {
      break
    } 
  }
  return result.length
}