function solution(arr) {
  let answer = []
  
  let max = arr.reduce((acc, cur) => (acc * cur), 1)

  for (let i=arr[arr.length-1]; i<=max; i++) {
    let count = 0
    arr.map(a => {
      if (i % a == 0) {
        count++
      }
    })
    if (count == arr.length) {
      answer.push(i)
      return answer[0]
    }
  }
}