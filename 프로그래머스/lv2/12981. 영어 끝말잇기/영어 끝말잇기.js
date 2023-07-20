function solution(n, words) {
  
  let answer = []
  let result = [0, 0]

  for (let i=0; i<words.length; i++) {
    
    answer.push(words[i])

    if (i < words.length - 1) {
      if (answer[i].slice(-1) != words[i+1].slice(0,1)) {
        result[0] = (i+2) % n ? (i+2) % n : n
        result[1] = Math.ceil((i+2) / n)
        break
      } 
      if (answer.includes(words[i+1])) {
        result[0] = (i+2) % n ? (i+2) % n : n
        result[1] = Math.ceil((i+2) / n)
        break
      }
    } 
  }
  return result
}