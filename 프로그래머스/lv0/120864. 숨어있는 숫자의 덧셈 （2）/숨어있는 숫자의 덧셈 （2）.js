function solution(my_string) {
  let numArray = []
  let strArray = []
  let filteredNum = []
  let strSum = 0
  my_string = my_string.split('')
  my_string.map((a, i) => {
    if (isNaN(a)){
      numArray.push('A')
    } else {
      numArray.push(parseInt(my_string[i]))
    }
  })
  numArray.map((a, i) => {
    strArray.push(a.toString())
  })
  for (let i=0; i<strArray.length; i++){
    strSum += strArray[i]
  }
  strSum = strSum.split('A')
  strSum.map((a, i) => {
    if (a){
      filteredNum.push(parseInt(a))
    }
  })
  const sum = filteredNum.reduce((acc, cur) => acc + cur, 0)
  return sum
}