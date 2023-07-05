function solution(clothes) {
  let clothesTypes = {}
  let answer = 1

  clothes.forEach(a => {
    if (clothesTypes[a[1]]){
      clothesTypes[a[1]] ++
    } else {
      clothesTypes[a[1]] = 1
    }
  })
    
  for (const key in clothesTypes) {
    answer *= (clothesTypes[key] + 1)
  }
  return(answer-1)
}