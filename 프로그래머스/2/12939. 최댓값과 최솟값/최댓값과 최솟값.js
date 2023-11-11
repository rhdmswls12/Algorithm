function solution(s) {
  let array = s.split(' ')
  array.forEach((s, i) => array[i] = Number(s))
  
  const min = Math.min(...array)
  const max = Math.max(...array)
  return min.toString() + ' ' + max.toString()
}
