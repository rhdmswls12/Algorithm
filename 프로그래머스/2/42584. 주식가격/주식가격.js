function solution(prices) {
    let stack = []
    let result = new Array(prices.length).fill(0)
    
    for (let i=0; i<prices.length; i++) {
        stack.push(prices[i])
        for (let j=i+1; j<prices.length; j++) {
            if (stack[stack.length-1] > prices[j]) {
                stack.pop()
                result[i] = j-i
                break
            } else {
                result[i] = prices.length-i-1
            }
        }
    }
    return result
}