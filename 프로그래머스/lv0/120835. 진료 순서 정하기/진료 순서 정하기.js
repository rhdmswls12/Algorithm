function solution(emergency) {
  let result = []
  let copy = [...emergency] // [3, 76, 24]
  emergency.sort((a, b) => b - a) // [76, 24, 3]
  for (let i=0; i<copy.length; i++){
    for (let j=0; j<emergency.length; j++){
      if(copy[i] == emergency[j]){
        result.push(j+1)
      }
    }
  }
  return result
}