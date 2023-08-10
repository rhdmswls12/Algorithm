function solution(t, p) {
  let array = t.split('')
  let str = []
  let count = 0
  for (let i=0; i<array.length; i++) {  
    if (array.length-i >= p.length) {
      str.push(array.slice(i, i+p.length))
    }
  }
  for (let i=0; i<str.length; i++) {
    if (Number(str[i].join('')) <= Number(p)) {
      count++
    }
  }
  return count
}