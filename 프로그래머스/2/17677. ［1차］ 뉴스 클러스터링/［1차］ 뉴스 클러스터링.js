function solution(str1, str2) {
    let intersect = 0
    let union = 0
    const a = makeSet(str1)
    const b = makeSet(str2)
    
    if (!a.length && !b.length) return 65536
    
    let set = new Set([...a, ...b])
    set.forEach(s => {
        let has1 = a.filter(item => item === s).length
        let has2 = b.filter(item => item === s).length
        intersect += Math.min(has1, has2)
        union += Math.max(has1, has2)
    })
    
    return Math.trunc((intersect/union)*65536)
}
const makeSet = (str) => {
    const regex = /^[a-zA-Z]+$/
    str = str.split('')
    let array = []
    for (let i=0; i<str.length; i++) {
        if (i<str.length-1) {
            let sliced = str.slice(i, i+2).join('')
            if (regex.test(sliced)) array.push(sliced.toUpperCase())
        }
    }
    return array
}