function solution(seoul) {
  let answer = ''
  seoul.map((a, i) => {
    if (a == 'Kim') {
      answer = `김서방은 ${i}에 있다`
    }
  })
  return answer
}