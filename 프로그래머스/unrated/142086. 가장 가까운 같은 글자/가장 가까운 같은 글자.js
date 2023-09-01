function solution(s) {
  let str = s.split('')
  let array = []
  let answer = []

  for (let i=0; i<str.length; i++) {

    if (!array.includes(str[i])) {
      array.push(str[i])
      answer.push(-1)
    } else { 
      for (let j=array.length-1; j>=0; j--) {
        if (str[i] == array[j]) {
          array.push(str[i])
          answer.push(i-j)
          break
        }
      } 
    }
  }
  return answer
}