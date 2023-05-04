function solution(num_list) {
  let answer = [0, 0]
  let odd = 0
  let even = 0
  num_list.map((num, i) => {
    if (num % 2) {
      odd += 1
      answer[1] = odd
    } else {
      even += 1
      answer[0] = even
    }
    
  })
  return answer
  
}