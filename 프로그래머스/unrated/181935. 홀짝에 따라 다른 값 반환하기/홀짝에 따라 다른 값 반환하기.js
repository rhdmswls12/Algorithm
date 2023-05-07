function solution(n) {
  let answer = 0;
  if (n%2) {
    for (let i=1; i<=n; i++){
      if (i%2){
        answer += i;
      } else {
        continue;
      }
    }
      return answer;
  } else {
    for (let i=1; i<=n; i++){
      if (i%2){
        continue;
      } else {
        answer += i**2;
      }
    }
    return answer;
  }
  
}