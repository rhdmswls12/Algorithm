function solution(s) {
    let answer = 0;
    let arr = s.split('');
    for (let i=0; i<s.length; i++) {
        if (check(arr)) answer++;
        let first = arr.shift();
        arr.push(first);
    }
    return answer;
}
function check(arr) {
    const points = {
        '[': ']',
        '(': ')',
        '{': '}',
    }
    let stack = [];
    
    for (let i=0; i<arr.length; i++) {
        let last = stack[stack.length-1];
        
        if (points[last] === arr[i]) {
            stack.pop();
        } else {
            stack.push(arr[i]);
        }
    }
    return stack.length ? false : true;
}