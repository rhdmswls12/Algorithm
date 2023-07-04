function solution(nums) {
  let types = [...new Set(nums)]
  let limit = nums.length / 2
  const result = types.length > limit ? limit : types.length
  return result
}