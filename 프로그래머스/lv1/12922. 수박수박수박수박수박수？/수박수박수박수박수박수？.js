function solution(n) {
  let answer = []
  for (let i=0; i<n; i++) {
    if (i % 2) {
      answer.push('박')
    } else {
      answer.push('수')
    }
  }
  return answer.join('')
}