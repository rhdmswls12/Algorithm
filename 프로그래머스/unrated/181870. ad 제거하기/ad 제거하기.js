function solution(strArr) {
  let array = []
  let filtered = 0
  strArr.map((a, i) => {
    if(a.includes('ad')){
      array.push(a)
    }
  })
  for (let i=0; i<strArr.length; i++){
    for (let j=0; j<array.length; j++){
      if (strArr[i] == array[j]){
        strArr.splice(i, 1)
      }
    }
  }
  return strArr
}