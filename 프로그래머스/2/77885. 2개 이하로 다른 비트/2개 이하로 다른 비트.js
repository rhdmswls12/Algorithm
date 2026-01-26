function solution(numbers) {
    const answer = [];
    
    for (const num of numbers) {
        if (num % 2 === 0) {
            answer.push(num + 1);
            continue;
        }
        
        const bit = '0' + num.toString(2);
        const idx = bit.lastIndexOf('0');
        
        const next = bit.slice(0, idx) + '10' + bit.slice(idx + 2);
        
        answer.push(parseInt(next, 2));
    }
    return answer;
}