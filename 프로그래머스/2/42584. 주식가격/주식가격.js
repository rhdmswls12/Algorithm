function solution(prices) {
    const result = Array(prices.length).fill(0);
    
    for (let i=0; i<prices.length; i++) {
        let cur = prices[i];
        let count = 0;
        for (let j=i+1; j<prices.length; j++) {
            count++;
            if (cur > prices[j]) break;
        }
        result[i] = count;
    }
    return result;
}