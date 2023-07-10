function solution(s) {
  let num = s.split(' ')
  const minMax = num.sort((a, b) => a- b)
  return(minMax[0]+' '+minMax[minMax.length-1])
}
