function solution(n_str) {
  let result = []

  result = n_str.split(/^0+/)
  if (result.length > 1) {
    return result[1]
  } else {
    return n_str
  }
}