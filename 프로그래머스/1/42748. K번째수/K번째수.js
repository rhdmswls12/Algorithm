function solution(array, commands) {
  let answer = []
  for (const command of commands) {
      let i = command[0]
      let j = command[1]
      let k = command[2]
      
      let sliced = array.slice(i-1, j)
      sliced.sort((a, b) => a - b)
      answer.push(sliced[k-1]) 
  }
    return answer
}