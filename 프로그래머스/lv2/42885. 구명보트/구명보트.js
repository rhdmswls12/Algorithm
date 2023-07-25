function solution(people, limit) {
  let boat = 0
  
  people.sort((a, b) => a - b)
    
  while(people.length != 0) {
    if (people[0] + people[people.length-1] <= limit) {
      boat++
      people.splice(0,1)
      people.pop()
    } else {
      boat++
      people.pop()
    }
  }
  return boat
}