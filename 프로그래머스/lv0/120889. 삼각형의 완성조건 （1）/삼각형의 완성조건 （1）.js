function solution(sides) {
  let others = []
  sides.sort((a, b) => a - b)
  others = sides[0]+sides[1]
  if (sides[2] >= others){
    return 2
  } else {
    return 1
  }
}
  