function solution(s) {
  let array = s.split(/\D/g)
  let numbers = []
  let object = {}
  let sorted = []
  let answer = []

  for (let i=0; i<array.length; i++) {
    if (Number(array[i])) {
      numbers.push(Number(array[i]))
    }
  }
  for (let i=0; i<numbers.length; i++) {
    if (object[numbers[i]]) {
      object[numbers[i]]++
    } else {
      object[numbers[i]] = 1
    }
  }
  for (let key in object) {
    sorted.push([key, object[key]])
  }
  
  sorted.sort((a, b) => b[1] - a[1])
  sorted.map(a => {
    answer.push(Number(a[0]))
  })
  return answer
}