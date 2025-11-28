function solution(prices) {
    let answer = [];
    
    for (let i=prices.length-1; i>=0; i--) {
        answer.push(i);
    }

    for (let i=0; i<prices.length; i++) {
        let cur = prices[i];
        
        for (let j=i+1; j<prices.length; j++) {
            if (cur > prices[j]) {
                answer[i] = j - i;
                break;
            }
        }
    }
    return answer;
}