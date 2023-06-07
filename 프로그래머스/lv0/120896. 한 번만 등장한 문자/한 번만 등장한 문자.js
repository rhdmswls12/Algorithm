function solution(s) {
  let string = []
  const check = {}
  string = s.split('')
  string.forEach((x) => {
    check[x] = (check[x] || 0) + 1
  })
  const keysOfCheck = Object.keys(check)
  const key = keysOfCheck.filter((key) => check[key] == 1).sort()
  return(key.join(""))
}