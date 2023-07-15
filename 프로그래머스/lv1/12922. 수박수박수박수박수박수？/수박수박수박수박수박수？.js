function solution(n) {
  let answer = []
  for (let i=0; i<n; i++) {
    i % 2 ? answer.push('박') : answer.push('수')
  }
  return answer.join('')
} 