function solution(s, n) {
  let array = s.split('')
  let result = []

  for (let i=0; i<array.length; i++) {
    if (array[i] != ' ') {
      if (array[i].charCodeAt()>=65 && array[i].charCodeAt()<=90) {
        if (array[i].charCodeAt() + n > 90) {
          result.push(String.fromCharCode(array[i].charCodeAt() + n - 26))
        } else {
          result.push(String.fromCharCode(array[i].charCodeAt() + n))
        }
      } else if (array[i].charCodeAt()>=97 && array[i].charCodeAt()<=122) {
        if (array[i].charCodeAt() + n > 122) {
          result.push(String.fromCharCode(array[i].charCodeAt() + n - 26))
        } else {
          result.push(String.fromCharCode(array[i].charCodeAt() + n))
        }
      }
    } else {
      result.push(array[i])
    }
  }
  return(result.join(''))
}