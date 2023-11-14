function solution(progresses, speeds) {
    let result = []
    let count = 1
    progresses.forEach((progress, i) => {
        progresses[i] = Math.ceil((100-progress) / speeds[i])
    })
    let cur = progresses[0]
    for (let i=1; i<progresses.length; i++) {
        if (cur >= progresses[i]) {
            count++
        } else {
            cur = progresses[i]
            result.push(count)
            count = 1
        }
    }
    result.push(count)
    
    return result
}