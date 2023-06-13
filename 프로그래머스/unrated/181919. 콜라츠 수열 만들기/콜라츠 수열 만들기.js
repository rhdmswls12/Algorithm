function solution(n) {
  let array = [n]
  for (let i=0; i<array.length; i++) {
    if (array[i] == 1) {
      break
    } else {
      if (array[i] % 2 ){
        array.push(3 * array[i] + 1)
      } else {
        array.push(array[i] / 2)
      }
    }
  }
  return array
}