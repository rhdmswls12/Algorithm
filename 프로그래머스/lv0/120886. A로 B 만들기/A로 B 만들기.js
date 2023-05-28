function solution(before, after) {
  let left = before.split('').sort().join('')
  let right = after.split('').sort().join('')
  let result = 0
  if (left.length !== right.length){
    result = 0
  } else {
    if (left == right){
      result = 1
    } else {
      result = 0
    }
  }
  return result
}