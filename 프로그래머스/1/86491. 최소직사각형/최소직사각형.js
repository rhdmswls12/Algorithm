function solution(sizes) {
    sizes.map(size => size.sort((a, b) => b - a))
    let width = []
    let height = []
    for (let i=0; i<sizes.length; i++) {
        width.push(sizes[i][0])
        height.push(sizes[i][1])
    }
    let maxWidth = Math.max(...width)
    let maxHeight = Math.max(...height)
    return maxWidth * maxHeight
}