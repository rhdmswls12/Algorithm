function solution(s) {
    let answer = 0;
    
    for (let i=0; i<s.length; i++) {
        let newStr = s.slice(i) + s.slice(0, i);
        
        if (isCorrect(newStr)) answer++;
    }
    
    return answer;
}

function isCorrect(s) {
    const obj = {
        '[': ']',
        '{': '}',
        '(': ')'
    }
    const stack = [];
    
    for (const el of s) {
        if (obj[stack.at(-1)] === el) {
            stack.pop();
        } else {
            stack.push(el);
        }
    }
    
    return stack.length ? false : true;
}