function solution(answers) {
  const first = [1,2,3,4,5]
  const second = [2,1,2,3,2,4,2,5]
  const third = [3,3,1,1,2,2,4,4,5,5]
  let score1= 0;
  let score2= 0;
  let score3= 0;
  let scores = []
  let result = []
  let maxScore = 0

  answers.forEach((answer, idx) => {
    if (answer === first[idx % first.length]) {
      score1++;
    } 
    if (answer === second[idx % second.length]) {
      score2++;
    } 
    if (answer === third[idx % third.length]) {
      score3++;
    }
  })
  
  scores = [score1, score2, score3]
  
  maxScore = Math.max(...scores)
  if (score1 == maxScore) {
    result.push(1)
  } 
   if (score2 == maxScore) {
    result.push(2)
  } 
   if (score3 == maxScore) {
    result.push(3)
  }
  return result.sort()
}