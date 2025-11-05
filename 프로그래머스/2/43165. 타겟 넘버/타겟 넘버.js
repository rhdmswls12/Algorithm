function solution(numbers, target) {
    let count = 0;
    
    function calc(sum, idx) {
        if (idx === numbers.length) {
            if (sum === target) count++;
            return;
        }
        
        calc(sum - numbers[idx], idx + 1);
        calc(sum + numbers[idx], idx + 1);

    }
    calc(0, 0);
    
    return count;
}