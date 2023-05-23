function solution(arr, idx) {
  let filtered = []
  let result = 0
  arr.map((a, i) => {
    if (a == 1) {
      filtered.push(i)
    } 
  })
  result = filtered.findIndex(num => num >= idx)
  if (result == -1){
    return result
  } else {
    return (filtered[result])
  }
}