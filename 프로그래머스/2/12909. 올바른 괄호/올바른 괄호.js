function solution(s){
//     let stack = [];
    
//     for (let i=0; i<s.length; i++) {
//         if (stack[stack.length-1] === '(' && s[i] === ')') {
//             stack.pop();
//         } else {
//             stack.push(s[i])
//         }
//     }
//     return stack.length ? false : true;
    let answer = 0;
    
    for (let p of s) {
        if (p === '(') {
            answer += 1;
        } else {
            answer -= 1;
        }
        if (answer < 0) return false;
    }
    return answer === 0 ? true : false;
}