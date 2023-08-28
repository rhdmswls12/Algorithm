function solution(array, commands) {
  let sliced = []
  let answer = []
  
  for (let i=0; i<commands.length; i++) {
    let num1 = commands[i][0]
    let num2 = commands[i][1]
    sliced.push(array.slice(num1-1, num2).sort((a,b) => a - b))
    
  }
  for (let i=0; i<sliced.length; i++) {
    let num = commands[i][2]
    answer.push(sliced[i][num-1])
  }
  return answer
}