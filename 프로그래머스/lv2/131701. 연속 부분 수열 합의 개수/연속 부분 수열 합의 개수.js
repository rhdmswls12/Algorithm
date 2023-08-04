function solution(elements) {
  let set = new Set()
  let result = []

  const consecutiveSum = (arr, n) => {
    let a = arr.slice(0, n-1)
    let array = [...arr, ...a]
    let cell = []
    let sum = 0

    for (let i=0; i<arr.length; i++) {
      cell = array.slice(i, i+n)
      sum = cell.reduce((acc, cur) => (acc + cur), 0)
      set.add(sum)
    }
    result = [...set]
  }
  
  for (let i=1; i<=elements.length; i++) {
    consecutiveSum(elements, i)
  }

  return result.length
}