function solution(n, m) {
  let answer = []
  let num = []
  let max = []
  let min = []
  for (let i=1; i<=n; i++) {
    for (let j=1; j<=m; j++) {
      if (n % i == 0 & m % j == 0 & i == j) {
        max.push(i)
      }
    }
  }
  
  m > n ? num = [n,m] : num = [m,n]

  for (let i=num[1]; i<=n*m; i++) {
    if (i % n == 0 & i % m == 0) {
      min.push(i)
    }
  }
  answer[0] = max[max.length-1]
  answer[1] = min[0]
    
  return answer
}