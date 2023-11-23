function solution(progresses, speeds) {
    let answer = []
    progresses.forEach((progress, i) => {
        progresses[i] = Math.ceil((100-progresses[i])/speeds[i])
    })
    let stack = [progresses[0]]
    let count = 1
    for (let i=1; i<progresses.length; i++) {
        let max = Math.max(...stack)
        if (max < progresses[i]) {
            answer.push(count)
            stack.pop()
            count = 1
        } else {
            count++
        }
        stack.push(progresses[i])
    }
    answer.push(count)
    return answer
}