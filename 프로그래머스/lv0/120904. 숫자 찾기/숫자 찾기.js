function solution(num, k) {
  let array = []
  let str = ''
  let answer = 0
  str = num.toString()
  array = str.split('')
  answer = array.findIndex(a => a == k)
  if (answer !== -1) {
    return (answer + 1)
  } else  {
    return answer
  }
}