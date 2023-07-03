function solution(new_id) {
  let lowerID = new_id.toLowerCase() // 1단계
  let alphabet = []
  let numbers = []
  let symbol = ['-', '_', '.']
  let filteredId = []
  let removedDot = ''
  for (let i=97; i<= 122; i++) {
    alphabet.push(String.fromCharCode(i))
  }
  for (let i=0; i<10; i++) {
    numbers.push(i.toString())
  }
  let validChars = [...alphabet, ...symbol, ...numbers] 
  lowerID = lowerID.split('')
  
  lowerID.map((a, i) => {
    if (validChars.includes(a)) {
      filteredId.push(a) // 2단계
    }
  })
  let str = filteredId.join('')
  removedDot = str.replace(/\.+/g, '.') // 3단계 
                  .replace(/^\./,'') // 4단계
  
  if (removedDot.length == 0) {
    removedDot += 'a'  // 5단계
  }
  let array = []
  array = removedDot.split('')
  array.map((a, i) => {
    let count = array.length - 15
    let str2 = array.join('')
    if (array.length >= 16) {
      array.splice(15, count) //6단계
    }
    removedDot = str2.replace(/\.$/,'') // 점으로 끝나는 경우 점 제거
    
  })
  let newArray = removedDot.split('')
  let i = newArray.length;
  while (i < 3) {
    newArray.push(newArray[newArray.length-1])
    
    if (i == 3) {
      break;
    }

    i++;
  }
  return(newArray.join(''))
}
