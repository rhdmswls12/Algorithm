function solution(arr) {
  let min = Math.min(...arr)
  arr.map((a, i) => {
    if (a == min) {
      arr.splice(i, 1)
    }
  })
  if (arr.length == 0) {
    arr.push(-1)
  }
  return arr
}