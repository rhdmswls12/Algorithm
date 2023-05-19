function solution(numbers, direction) {
  if (direction == "right"){
    numbers.splice(0, 0, numbers.at(-1))
    numbers.pop()
    return numbers
  } else if (direction == "left"){
    numbers.push(numbers[0])
    numbers.splice(0, 1)
    return numbers
  }
}