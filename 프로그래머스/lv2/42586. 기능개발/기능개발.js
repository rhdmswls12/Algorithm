function solution(progresses, speeds) {
  let processTime = []
  let result = []
  let object = {}
  let answer = []

  for (let i=0; i<progresses.length; i++) {
    processTime.push(Math.ceil((100 - progresses[i])/speeds[i]))
  }

  result.push(processTime[0])
  for (let i=1; i<processTime.length; i++) {
    if (result[result.length-1] >= processTime[i]) {
      result.push(result[result.length-1])
    } else {
      result.push(processTime[i])
    }
  }
    
  result.forEach(a => {
    object[a] = (object[a] || 0) + 1
  })
    
  for (let key in object) {
    answer.push(object[key])
  }
    
  return answer
}