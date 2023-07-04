function solution(nums) {
  let ponketmon = {}
  let count = 0
  let result = []

  nums.forEach(num => {
    ponketmon[num] = (ponketmon[num] || 0) + 1
  })
  
  const valuesOfPonketmon = Object.values(ponketmon).sort()
  valuesOfPonketmon.map((a, i) => {
    if (count < Math.floor(nums.length / 2)) {
      result.push(a)
      count++
    }
  })
  return count
}