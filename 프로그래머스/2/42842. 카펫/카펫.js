function solution(brown, yellow) {
    let array = []
    
    for (let i=1; i<=yellow; i++) {
        if (yellow % i === 0 && yellow/i >= i) {
            array.push([yellow/i, i])
        }
    }
    for (let i=0; i<array.length; i++) {
        if ((array[i][0]+2)*(array[i][1]+2) - yellow === brown) {
            array[i][0] = array[i][0]+2
            array[i][1] = array[i][1]+2
            return array[i]
        }
    }
}