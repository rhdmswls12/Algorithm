function solution(n) {
  let count = 0
  let answer = 0
  let small = n.toString(2)
  let array = small.split('')
  
  array.forEach(a => {
    if (a == '1') {
      count ++
    }
  })

  const getNumber = (num, countSmall) => {
    let countLarge = 0
    num ++
    let large = num.toString(2)
    let array = large.split('')
    
    array.map(a => {
      if (a == '1') {
        countLarge += 1
      }
    })
      
    if (countSmall == countLarge) {
      answer = parseInt(large, 2)
    } else {
      getNumber(num, count)
    }
  }
  
  getNumber(n, count)

  return answer
}