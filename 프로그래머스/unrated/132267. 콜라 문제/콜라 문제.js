function solution(a, b, n) {
  let answer = 0
  let newCoke = 0
  let input = n

  while (input >= a) {
    newCoke = parseInt(input/a)*b
    answer += newCoke
    input = newCoke + input%a
  }
  return answer
}