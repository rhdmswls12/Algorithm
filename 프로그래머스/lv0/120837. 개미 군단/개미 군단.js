function solution(hp) { 
  let share = 0
  let remain = 0
  let sum = 0
  if (hp >= 5){
    share = Math.floor(hp / 5) 
    remain = hp % 5 
    sum += share 
    if (remain >= 3){
      share = Math.floor(remain / 3) 
      remain = remain % 3 
      sum += share 
      if (remain < 3){
        sum += remain
      }
    } else {
      sum += remain
    }
  } else if (hp >= 3){
    share = Math.floor(hp / 3)
    remain = hp % 3
    sum += share
    if (remain < 3){
      sum += remain
    }
  } else {
    remain = hp / 1
    sum += remain
  }
  return sum
}