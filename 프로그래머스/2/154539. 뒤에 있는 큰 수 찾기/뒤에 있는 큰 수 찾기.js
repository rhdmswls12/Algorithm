function solution(numbers) {
    let result = Array(numbers.length).fill(-1);
    let stack = [];
    
    for (let i=numbers.length-1; i>=0; i--) {
        let cur = numbers[i];
        
        while (stack && stack[stack.length-1] <= cur) {
            stack.pop();
        }
        if (stack.length) {
            result[i] = stack[stack.length-1];
        }
        
        stack.push(cur);
        
    }
    return result;
}