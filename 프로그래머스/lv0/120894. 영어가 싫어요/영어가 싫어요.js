function solution(numbers) {
  const str = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  str.map((a, i) => {
    numbers = numbers.split(str[i]).join(i)
  })
  return(parseInt(numbers))
}