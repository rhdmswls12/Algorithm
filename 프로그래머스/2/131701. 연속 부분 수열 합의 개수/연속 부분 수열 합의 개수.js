function solution(elements) {
  let set = new Set(elements)
  let result = []
  
  for (let i=0; i<=elements.length; i++) {
      if (i >= 2) {
          let willAdd = elements.slice(0, i-1)
          let newArray = [...elements, ...willAdd]
          for (let j=0; j<newArray.length; j++) {
              let split = newArray.slice(j, j+i)
              let sum = split.reduce((acc, cur) => (acc + cur), 0)
              set.add(sum)
          }
      }
  }
    result = [...set].sort((a, b) => a - b)
    return result.length
}