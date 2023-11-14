function solution(want, number, discount) {
    let items = []
    let result = 0
    let answer = 0
    
    for (let i=0; i<want.length; i++) {
        for (let j=0; j<number[i]; j++) {
            items.push(want[i])
        }
    }
    items.sort()
    for (let i=0; i<discount.length; i++) {
        let canDiscount = discount.slice(i, i+10)
        canDiscount.sort()
        if (JSON.stringify(items) === JSON.stringify(canDiscount)) {
            answer++
        }
    }
    return answer
}