function solution(phone_number) {
  let result = phone_number.split('')
  result.map((a, i) => {
    if (i < result.length - 4) {
      result[i] = '*'
    }
  })
  return(result.join(''))
}