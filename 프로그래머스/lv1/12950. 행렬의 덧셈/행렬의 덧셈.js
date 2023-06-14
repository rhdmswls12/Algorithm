function solution(arr1, arr2) {
  let answer = []
  const rows = arr1.length;
  const columns = arr1[0].length;

  for (let i=0; i<rows; i++) {
    const element = []
    for (let j=0; j<columns; j++) {
      element.push(arr1[i][j]+arr2[i][j])
    }
    answer.push(element)
  }
  return answer
}