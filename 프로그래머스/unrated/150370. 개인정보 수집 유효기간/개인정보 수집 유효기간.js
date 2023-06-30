function solution(today, terms, privacies) {
  let standard = {}
  let result = []
  let answer = []
  let sum = 0
  let date = today.split('.') // ['2022', '05', '19']
  date.map((a, i) => {
    date[i] = parseInt(a)
  })

  sum = date[0] * 12 * 28 + date[1] * 28 + date[2] 

  terms.map((a, i) => {
    standard[a.split(' ')[0]] = parseInt(a.split(' ')[1])
  }) // {A: 6, B: 12, C: 3}
  
  let str = Object.keys(standard) // ['A', 'B', 'C']

  for (let i=0; i<privacies.length; i++) {
    for (let j=0; j<str.length; j++) {
      if (privacies[i].split(' ')[1] == str[j]) {
        result.push(dateCalculation(privacies[i].split(' ')[0], standard[str[j]]))
      } 
    } 
  } 
    
  result.map((a, i) => {
    if (a <= sum) {
      answer.push(i+1)
    } 
  })
  return answer
}

function dateCalculation (date, month) {
  let array = date.split('.')
  let newDate = 0
  
  array.map((a, i) => {
    array[i] = parseInt(a) // [2021, 5, 2]
  })
  newDate = array[0] * 12 * 28 + (array[1] + month) * 28 + array[2]
   
  return (newDate)
}
