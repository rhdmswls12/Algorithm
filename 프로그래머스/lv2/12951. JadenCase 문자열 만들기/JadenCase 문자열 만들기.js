function solution(s) {
  let array = s.toLowerCase().split(' ').join('*')
  let newArray = []
  
  newArray = array.split('')
    
  for (let i=0; i<newArray.length; i++) {
    if (newArray[i] == '*' && newArray[i+1]) {
      newArray[i+1] = newArray[i+1].toUpperCase() 
    } else if (newArray[0]) {
      newArray[0] = newArray[0].toUpperCase()
    } 
  }
  
  newArray.map((a, i) => {
    if (newArray[i] == '*') {
      newArray[i] = ' '
    }
  })
  return (newArray.join(''))
}