function solution(my_string, n) {
  let arr = my_string.split('')
  let answer =''
  for (let i = 0; i < arr.length; i++){
    for (let j = 1; j <= n; j++){
      answer += arr[i]
    }
  }
  return answer
}