function solution(clothes) {
      let types = {}
      let answer = 1

      for (let i=0; i<clothes.length; i++) {
          if (types[clothes[i][1]]) {
              types[clothes[i][1]]++
          } else {
              types[clothes[i][1]] = 1
          }
      }
      for (const key in types) {
          answer *= (types[key]+1)
    }
    return answer-1
}