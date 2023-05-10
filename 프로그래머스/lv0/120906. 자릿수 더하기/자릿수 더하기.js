function solution(n) {
  let array = [];
  let result = 0;
  
  for (let i = 1000000; i>=1; i/=10){
    if (Math.floor(n/i)){
      array.push(Math.floor(n/i) % 10)
    } else {
      continue;
    }
  }
  for (let i=0; i<array.length; i++){
    result += array[i]
  }
  return result
}