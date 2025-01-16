// function solution(s) {
//     let answer = '';
//     s = s.toLowerCase();
//     const strArr = s.split('');
    
//     answer += strArr[0].toUpperCase();
    
//     for (let i=1; i<strArr.length; i++) {
//         if (strArr[i-1] === ' ' && strArr[i]) {
//             answer += strArr[i].toUpperCase();
//         } else {
//          answer += strArr[i];   
//         }
//     }
//     return answer;
// }

function solution(s) {
    let answer = '';
    for (let i=0; i<s.length; i++) {
        if (i === 0 || s[i-1] === ' ') {
            answer += s[i].toUpperCase();
        } else {
            answer += s[i].toLowerCase();
        }
    }
    return answer;
}