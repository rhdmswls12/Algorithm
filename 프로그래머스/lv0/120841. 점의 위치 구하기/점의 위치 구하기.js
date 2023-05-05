function solution(dot) {
  let a = dot[0]
  let b = dot[1]
  if (a>0 & b>0){
    return 1
  }else if (a<0 & b>0){
    return 2
  }else if (a<0 & b<0){
    return 3
  }else {
    return 4
  }
}