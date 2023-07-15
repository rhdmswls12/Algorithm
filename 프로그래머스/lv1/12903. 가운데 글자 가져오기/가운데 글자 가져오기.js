function solution(s) {
  let array = s.split('')
  let index = Math.ceil(array.length / 2)
  let answer = ''
  
  if (array.length % 2) {
    answer = array[index-1]
  } else {
    answer = array[index-1] + array[index]
  }
  return answer
} 