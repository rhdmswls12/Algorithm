function solution(absolutes, signs) {
  let array = []
    signs.map((a, i) => {
      if (a) {
        array.push(absolutes[i]);
      } else {
        array.push(-absolutes[i]);
      }
    })
  const sum = array.reduce((acc, cur) => ( acc + cur ), 0)
  return sum
}