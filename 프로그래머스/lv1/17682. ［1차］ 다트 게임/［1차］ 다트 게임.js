function solution(dartResult) {
  let array = dartResult.split('')
  let result = []
  
  for (let i=0; i<array.length; i++) {
    if (array[i] == 'S') {
      if (parseInt(array[i-2]) + parseInt(array[i-1])) {
        result.push(parseInt(array[i-2] + array[i-1]))
      } else {
        result.push(parseInt(array[i-1]))
      }
    } else if (array[i] == 'D') {
      if (parseInt(array[i-2]) + parseInt(array[i-1])) {
        result.push((parseInt(array[i-2] + array[i-1])) ** 2)
      } else {
        result.push(parseInt(array[i-1]) ** 2)
      }
    } else if (array[i] == 'T') {
      if (parseInt(array[i-2]) + parseInt(array[i-1])) {
        result.push((parseInt(array[i-2] + array[i-1])) ** 3)
      } else {
        result.push(parseInt(array[i-1]) ** 3)
      }
    } else if (array[i] == '*') {
      result.push('*')
    } else if (array[i] == '#') {
      result.push('#')
    } 
  }
  
  result.map((a, i) => {
    if (a == '*') {
      if (i == 1) {
        result[0] = result[0] * 2
      } else {
        if (i >= 3) {
          if (typeof(result[i-2]) == 'string') {
            result[i-3] = result[i-3] * 2
            result[i-1] = result[i-1] * 2
          } else {
            result[i-2] = result[i-2] * 2
            result[i-1] = result[i-1] * 2
          }
        } else if (i >= 2) {
          result[i-2] = result[i-2] * 2
          result[i-1] = result[i-1] * 2
        }
      }
    }else if (a == '#') {
      result[i-1] = result[i-1] * (-1)
    } 
  })
  
  result.map((a, i) => {
    if (typeof(a) !== 'number') {
      result.splice(i, 1)
    }
  })
  
  const sum = result.reduce((acc, cur) => (acc + cur), 0)
  
  return sum
}