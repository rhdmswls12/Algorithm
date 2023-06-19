function solution(numbers) {
  let set = new Set()
  let sum = 0
  let array = []
  for (let i=0; i<numbers.length; i++) {
    for (let j=0; j<i; j++) {
      sum = numbers[i] + numbers[j]
      set.add(sum)
      array = [...set]
      array.sort((a, b) => {
        return a - b
      })
    }
  }
  return array
}