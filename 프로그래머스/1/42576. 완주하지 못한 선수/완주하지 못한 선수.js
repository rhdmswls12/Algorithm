function solution(participant, completion) {
  let myMap = new Map()
  let answer = ''

  for (let p of participant) {
    if (!myMap.get(p)) {
      myMap.set(p, 1)
    } else {
      myMap.set(p, myMap.get(p) + 1)
    }
  }
  for (let c of completion) {
    if (myMap.get(c)) {
      myMap.set(c, myMap.get(c) - 1)
    }
  }
  for (let [key, value] of myMap) {
    if (value !== 0) {
      answer = key
    } 
  }
  return answer
}