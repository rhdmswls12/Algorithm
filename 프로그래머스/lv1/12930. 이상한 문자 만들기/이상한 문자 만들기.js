function solution(s) {
  let array = s.split(' ')
  let bigArray = []
  let cell = []
  
  for (let i=0; i<array.length; i++) {
    cell = array[i].split('')
    bigArray.push(cell)
  }
  
  for (let i=0; i<bigArray.length; i++) {
    for (let j=0; j<bigArray[i].length; j++) {
      if (j % 2) {
        bigArray[i][j] = bigArray[i][j].toLowerCase()
      } else {
        bigArray[i][j] = bigArray[i][j].toUpperCase()
      }
    }
    bigArray[i] = bigArray[i].join('')
  }
  return (bigArray.join(' '))
}