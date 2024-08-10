function solution(s) {
    let zeroCnt = 0;
    let count = 0;
    
    while(s != '1') {
        let arr = []
        for (let num of s) {
            if (num != 0) {
                arr.push(num)
            } else {
                zeroCnt++
            }
        }
        count++
        s = arr.length.toString(2)
    }
    return [count, zeroCnt]
}
