function solution(food) {
  let answer = '';
  let reversed = []

  for (let i=1; i<food.length; i++) {
    let array = []
    for (let j=1; j<Math.floor(food[i]/2)+1; j++) {
      array.push(i)
    }
    answer += array.join('')
  }
  reversed = answer.split('').reverse()
  answer += '0'
  answer += reversed.join('')
  return answer
}