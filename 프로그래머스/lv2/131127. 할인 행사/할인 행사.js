function solution(want, number, discount) {
  let objects = {}
  let items = []
  let answer = 0
  
  for (let i=0; i<want.length; i++) {
    objects[want[i]] = number[i]
  }
  
  for (let key in objects) {
    for (let i=0; i<objects[key]; i++) {
      items.push(key)
    }
  }
  
  for (let i=0; i<discount.length; i++) {
    let array = discount.slice(i, i+items.length)
    
    if (array.length == items.length) {
      items.sort()
      array.sort()
      if (JSON.stringify(items) === JSON.stringify(array)) {
        answer++
      } 
    }
  }
  return answer
}