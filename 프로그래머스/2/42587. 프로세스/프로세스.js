function solution(priorities, location) {
    let answer = 0
    const array = priorities.map((process, index) => {
        return {process, index}
    })
    while(array.length) {
        let cur = array.shift()
        if (array.some(el => el.process > cur.process)) {
            array.push(cur)
        } else {
            answer++
            if (cur.index === location) break
        }
    }
    return answer
}