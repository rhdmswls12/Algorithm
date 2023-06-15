function solution(n, arr1, arr2) {
  let key1 = []
  let key2 = []
  let result = []
  let answer = []
  let row = arr1.length
  let col =n

  for (let i=0; i<row; i++) {
      key1.push(arr1[i].toString(2).split(''))
      key2.push(arr2[i].toString(2).split(''))
      
      for (let j=0; j<col; j++) {
        if(key1[i].length<n) {
          key1[i].unshift('0')
        }
        if(key2[i].length<n) {
          key2[i].unshift('0')
        }
      }
      
  }
  console.log(key1)
  console.log(key2)
  for (let i=0; i<key1.length; i++) {
    const blank = []
    for (let j=0; j<key2.length; j++) {
      if (result.length < n){
        if (key1[i][j] == '1' || key2[i][j] == '1') {
          blank.push('#')
        } else {
          blank.push(' ')
        } 
      }
    }
    result.push(blank)
  }
  for (let i=0; i<result.length; i++) {
    answer.push(result[i].join(''))
  }
  return answer
}