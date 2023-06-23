function solution(survey, choices) {
  const types = ["RT","CF","JM","AN"]
  let result = ''
  let MBTI = {}
  survey.forEach((char) => {
    char.split('')
    .forEach((a) => {
      MBTI[a] = 0
    })
  })
  for (let i=0; i<choices.length; i++) {  
    choices[i] > 4 ? MBTI[survey[i].split('')[1]] += Math.abs(4-choices[i]) 
                   : MBTI[survey[i].split('')[0]] += Math.abs(4-choices[i]) 
  }
  types.map((a, i) => {
    if(MBTI[a.split('')[0]] > MBTI[a.split('')[1]]) {
      result += a.split('')[0]
    } else if (MBTI[a.split('')[0]] < MBTI[a.split('')[1]]) {
      result += a.split('')[1]
    } else {
      result += types[i].split('')[0]
    }
  })
  return result
}