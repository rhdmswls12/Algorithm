function solution(n) {
  let num = 0
  for (let i=1; i<=10000; i++){
    if (i*i == n){
      num = 1
      break
    }else {
      num = 2
    }
  }
  return num
}