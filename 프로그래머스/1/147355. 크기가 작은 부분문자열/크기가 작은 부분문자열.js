function solution(t, p) {
    let answer = 0
    let len = p.length
    for (let i=0; i<t.length-len+1; i++) {
        if ((parseInt(t.slice(i, len+i)) - p) <= 0) answer++
    }
    return answer
}