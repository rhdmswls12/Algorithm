function solution(survey, choices) {
  
  let point = [3, 2, 1, 0, 1, 2, 3]
  let disagree = { 
    'R': 0,
    'C': 0, 
    'J': 0,
    'A': 0
  }
  let agree = {
    'T': 0,
    'F': 0,
    'M': 0,
    'N': 0
  }
  let result = ''
  
  for (let i=0; i<survey.length; i++) {
    if(survey[i].slice(0,1) == 'R') {
      if (choices[i] > 3) {
        agree['T'] += point[choices[i]-1]
      } else {
        disagree['R'] += point[choices[i]-1]
      }
    } else if (survey[i].slice(0,1) == 'C') {
      if (choices[i] > 3) {
        agree['F'] += point[choices[i]-1]
      } else {
        disagree['C'] += point[choices[i]-1]
      }
    } else if (survey[i].slice(0,1) == 'J') {
      if (choices[i] > 3) {
        agree['M'] += point[choices[i]-1]
      } else {
        disagree['J'] += point[choices[i]-1]
      }
    } else if (survey[i].slice(0,1) == 'A') {
      if (choices[i] > 3) {
        agree['N'] += point[choices[i]-1]
      } else {
        disagree['A'] += point[choices[i]-1]
      }
    } else {
      if (survey[i].slice(0,1) == 'T') {
        if (choices[i] > 3) {
          disagree['R'] += point[choices[i]-1]
        } else {
          agree['T'] += point[choices[i]-1]
        }
      } else if (survey[i].slice(0,1) == 'F') {
        if (choices[i] > 3) {
          disagree['C'] += point[choices[i]-1]
        } else {
          agree['F'] += point[choices[i]-1]
        }
      } else if (survey[i].slice(0,1) == 'M') {
        if (choices[i] > 3) {
          disagree['J'] += point[choices[i]-1]
        } else {
          agree['M'] += point[choices[i]-1]
        }
      } else if (survey[i].slice(0,1) == 'N') {
        if (choices[i] > 3) {
          disagree['A'] += point[choices[i]-1]
        } else {
          agree['N'] += point[choices[i]-1]
        }
      }
    }
  }

  
  if (agree['T'] > 0 || disagree['R'] > 0) {
    if (agree['T'] > disagree['R']) {
      result += 'T'
    } else {
      result += 'R'
    }
  } else {
    result += 'R'
  }
  if (agree['F'] > 0 || disagree['C'] > 0) {
    if (agree['F'] > disagree['C']) {
      result += 'F'
    } else {
      result += 'C'
    }
  } else {
    result += 'C'
  }
  if (agree['M'] > 0 || disagree['J'] > 0) {
    if (agree['M'] > disagree['J']) {
      result += 'M'
    } else {
      result += 'J'
    }
  } else {
    result += 'J'
  }
  if (agree['N'] > 0 || disagree['A'] > 0) {
    if (agree['N'] > disagree['A']) {
      result += 'N'
    } else {
      result += 'A'
    }
  } else {
    result += 'A'
  }
  return result
}