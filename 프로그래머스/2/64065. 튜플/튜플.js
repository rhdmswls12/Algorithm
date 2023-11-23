function solution(s) {
    let set = new Set()
    let answer = []
    s = JSON.parse(s.replace(/{/g,'[').replace(/}/g,']')).sort((a, b) => a.length - b.length)
    for (let i=0; i<s.length; i++) {
        for (let j=0; j<s[i].length; j++) {
            set.add(s[i][j])
        }
    }
    answer = [...set]
    return answer
}