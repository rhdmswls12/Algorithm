function solution(answers) {
    let scores = {
        1: 0,
        2: 0,
        3: 0
    }
    let first = [1, 2, 3, 4, 5]
    let second = [2, 1, 2, 3, 2, 4, 2, 5]
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let answer = []
    
    for (let i=0; i<answers.length; i++) {
        if (answers[i] === first[i % first.length]) {
            scores[1]++
        } 
        if (answers[i] === second[i % second.length]) {
            scores[2]++
        } 
        if (answers[i] === third[i % third.length]) {
            scores[3]++
        }
    }
    let max = Math.max(...Object.values(scores))
    for (const key in scores) {
        if (scores[key] === max) answer.push(Number(key))
    }
    return answer
}