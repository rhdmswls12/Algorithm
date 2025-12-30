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
        ']': '[',
        '}': '{',
        ')': '('
    }
    const stack = [];
    
    for (const ch of s) {
        if (obj[ch]) {
            if (obj[ch] === stack.at(-1)) stack.pop(); 
            else return false;
        } else {
            stack.push(ch);
        }
    }
    
    return stack.length === 0;
}