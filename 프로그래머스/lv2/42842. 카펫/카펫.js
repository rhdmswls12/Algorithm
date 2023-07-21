function solution(brown, yellow) {
  var answer = [];

 for (let i=3; i<10000; i++) {
    for (let j=3; j<=i; j++) {
      if (((brown + yellow) % (i * j) == 0) && (yellow == (i-2) * (j-2))) {
        answer = [i, j]
        break;
      } else {
        i * j
      }
    }
  }
  return answer
}