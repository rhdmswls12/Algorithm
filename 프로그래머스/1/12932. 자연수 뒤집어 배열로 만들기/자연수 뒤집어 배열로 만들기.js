function solution(n) {
    let s = (n + '').split('').reverse()
    let answer = s.reduce((acc, cur) => {
       acc.push(parseInt(cur)) 
       return acc
    }, [])
    return answer
}