function solution(num) {
  let numbers = [num]
  let answer = 0

  const collatz = (array) => {
    if (array[array.length-1] !== 1) {
      if (array[array.length-1] % 2) {
        numbers.push(array[array.length-1] * 3 + 1)
        collatz(numbers)
      } else {
        numbers.push(array[array.length-1] / 2)
        collatz(numbers)
      }
      answer = numbers.length - 1
      if (answer >= 500) {
        answer = -1
      } else {
        return answer
      }
    }
    
  }

  if (numbers[0] == 1) {
    answer = 0
  } else {
    collatz(numbers)
  }
    return answer
}