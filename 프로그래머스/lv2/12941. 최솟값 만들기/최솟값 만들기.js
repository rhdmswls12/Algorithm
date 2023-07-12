function solution(A,B){
  let arrayA = A.sort((a, b) => a - b)
  let arrayB = B.sort((a, b) => b - a)
  let sum = 0

  for (let i=0; i<arrayA.length; i++) {
      sum += arrayA[i] * arrayB[i]
  }
  return sum
}