function solution(s) {
  let array = []
  let numArray = []
  array = s.split(' ')
  for (let i=0; i<array.length; i++) {
    if (array[i] == 'Z') {
      array.splice(i-1, 1)
    }
  }
  array.map((a, i) => {
    if (a !== 'Z') {
      numArray.push(parseInt(a))
    } 
  })
  const sum = numArray.reduce((acc, cur) => acc + cur , 0)
  return sum
}