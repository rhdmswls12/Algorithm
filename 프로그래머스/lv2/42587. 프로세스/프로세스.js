function solution(priorities, location) {
  let max = Math.max(...priorities)
  let index = []
  let answer = 0

  for (let i=0; i<priorities.length; i++) {
    index.push(i)
  }

  while(priorities.length != 0) {
    if (priorities[0] < max) {
      priorities.push(priorities.shift())
      index.push(index.shift())
    } else {
      answer += 1
      priorities.shift()
      if (index.shift() == location) {
        return answer;
      }
      max = Math.max(...priorities)
    }
  }
}