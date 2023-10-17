function solution(nums) {
  let types = [...new Set(nums)]
  let maximum = nums.length / 2
  return types.length < maximum ? types.length : maximum
}