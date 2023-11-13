function solution(s) {
    let array = []
    let set = new Set()
    
    array = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
    array.sort((a, b) => a.length - b.length)
    for (let i=0; i<array.length; i++) {
        for (let j=0; j<array[i].length; j++) {
            set.add(array[i][j])
        }
    }
    set = [...set]
    return set
}