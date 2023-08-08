function solution(n, left, right) {
  let rows = []
  let cols = []
  let result = []
  for (let i=left; i<=right; i++) {
    rows.push(Math.floor(i/n) + 1)
    cols.push(i % n + 1)
  }
  
  for (let i=0; i<rows.length; i++) {
    if (rows[i] <= cols[i]) {
      result.push(cols[i])
    } else {
      result.push(rows[i])
    }
  }
  return result
}