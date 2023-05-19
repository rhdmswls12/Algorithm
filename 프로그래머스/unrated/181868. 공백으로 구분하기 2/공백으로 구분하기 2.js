function solution(my_string) {
  let array = []
  let answer = []
  array = my_string.split(" ")
  array.map((a, i) => {
    if (a !== ''){
      answer.push(array[i])
    }
  })
  return answer
}