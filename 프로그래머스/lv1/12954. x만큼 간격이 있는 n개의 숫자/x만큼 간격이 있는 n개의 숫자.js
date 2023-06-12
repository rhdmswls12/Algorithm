function solution(x, n) {
  let answer = []
  if (x > 0) {
    for (let i=1; i<=10000000; i++) {
      if (answer.length <= n){
        answer.push(i*x)
      }
    }
  } else {
    for (let i=1; i<=10000000; i++){
      if (answer.length <= n){
        answer.push(i*x)
      }
    }
  }
  answer.splice(n)
  return answer  
}