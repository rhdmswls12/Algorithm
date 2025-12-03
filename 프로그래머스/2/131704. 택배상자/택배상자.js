function solution(order) {
    let answer = 0;
    let stack = [];
    let idx = 1;
    
    for (const target of order) {
        while (idx <= target) {
            stack.push(idx);
            idx++;
        }
        if (stack.pop() === target) {
            answer++;
        } else {
            break;
        }
    }
    return answer;
}