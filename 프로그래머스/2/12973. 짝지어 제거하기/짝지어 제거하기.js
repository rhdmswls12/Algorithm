function solution(s) {
    const stack = [];
    
    for (const el of s) {
        if (stack.at(-1) === el) {
            stack.pop();
        } else {
            stack.push(el);
        }
    }
    return stack.length ? 0 : 1; 
}