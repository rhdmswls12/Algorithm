function solution(number) {
  let result = 0
  for (let i=1; i<number.length; i++) {
    let base = number[i-1]
    for (let j=i; j<number.length; j++) {
      for (let k=j+1; k<number.length; k++) {
        if (-base == number[j] + number[k]) {
          result++
        }
      }
      
    }
  }
  return result
}