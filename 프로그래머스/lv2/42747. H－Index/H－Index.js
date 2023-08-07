function solution(citations) {
  let result = 0
  citations = citations.sort((a, b) => a - b)
  
  for (let i=0; i<citations.length; i++) {
    let count = 0
    let h = i+1
    for (let j=0; j<citations.length; j++) {
      if (h <= citations[j]) {
        count++
      }
    }
    if (h <= count) {
      result = h
    }
  }
  return result
}