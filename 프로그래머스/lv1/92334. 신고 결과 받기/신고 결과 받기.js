function solution(id_list, report, k) {
  let user = {}
  let userCount = {}
  let emailCount = {}
  let target = []
  let set = new Set()
  let filteredReport = []
  let overK = []
  let result = []
  id_list.map((a, i) => {
    user[a] = []
    userCount[a] = 0
    emailCount[a] = 0
  })
  for (let i=0; i<report.length; i++) {
    set.add(report[i]) // 중복 신고 제거
  }
  filteredReport = [...set] // 다시 배열로

  for (let i=0; i<filteredReport.length; i++) {
    target.push(filteredReport[i].split(' ')[1])
    user[filteredReport[i].split(' ')[0]].push(filteredReport[i].split(' ')[1])
  }
  target.forEach((name) => {
    userCount[name] += 1
  })
  
  for (let i=0; i<id_list.length; i++) {
    if (userCount[id_list[i]] >= k) {
      overK.push(id_list[i]) //[frodo, neo]
    }
  }

  for (let i=0; i<id_list.length; i++) {
    for (let j=0; j<overK.length; j++) {
      if (user[id_list[i]].includes(overK[j])) {
        emailCount[id_list[i]] += 1
      }
    }
  }

  result = Object.values(emailCount)
  return result
}