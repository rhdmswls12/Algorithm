function solution(rsp) {
  let problem = rsp.split('')
  let answer = ""
  problem.map((a) => {
    if (a == "2"){
      answer += "0"
    }else if (a == "0"){
      answer += "5"
    }else {
      answer += "2"
    }
  })
  return answer
}