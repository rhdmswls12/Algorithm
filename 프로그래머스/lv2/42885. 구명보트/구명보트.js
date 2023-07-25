function solution(people, limit) {
  let boat = 0
  
  people.sort((a, b) => a - b)
    
  const toBoat = (arr, limit) => {
    if (arr.length != 0) {
      for (let i=0; i<arr.length; i++) {
        if (arr[0] + arr[arr.length-1] <= limit) {
          boat++
          arr.splice(0, 1)
          arr.pop()
        } else {
          boat++
          arr.pop()
        }
      }
    }
    if (arr.length > 0) {
      toBoat(arr,limit)
    }
    
  }
  toBoat(people, limit)
  return boat
}