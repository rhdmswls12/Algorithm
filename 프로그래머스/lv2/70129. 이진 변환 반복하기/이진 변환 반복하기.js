function solution(s) {
  let answer = [0, 0]
  let newNum = 0

  const notZero = (str) => { 
    let arr = str.split('')
    let newArray = []
        arr.map(a => {
          if (a == '0') {
            answer[1] += 1

          } else {
            newArray.push(a)
          }
        }) 


    if (newArray.length != 1) {
      toBinary(newArray.length) 
    } else {
      answer[0] += 1
    }
  }
   
  const toBinary = (num) => { 
    
    answer[0] += 1
    newNum = num.toString(2) 
    
    if (newNum.includes('0')) {
      notZero(newNum)
    } else if (newNum.length>1) {
      toBinary(newNum.length)
    }
    
  }
  if (s.includes('0')){
    notZero(s)
  } else {
    toBinary(s.length)
  }
  
  return answer
}