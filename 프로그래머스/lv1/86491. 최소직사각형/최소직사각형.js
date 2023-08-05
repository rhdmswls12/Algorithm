function solution(sizes) {
  let newSizes = []
  let width = []
  let height = []
  
  for(let i=0; i<sizes.length; i++) {
    let cell = sizes[i].sort((a, b) => b - a)
    newSizes.push(cell)
  }
  for (let i=0; i<newSizes.length; i++) {
    width.push(newSizes[i][0])
    height.push(newSizes[i][1])
  }
  width.sort((a, b) => b - a)
  height.sort((a, b) => b - a)

  return width[0] * height[0]
}