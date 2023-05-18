function solution(cipher, code) {
  let array = []
  let answer = []
  array = cipher.split('')
  array.map((a, i) => {
    if ((i+1) % code == 0){
      answer.push(array[i])
    }
  })
  return (answer.join(''))
}
