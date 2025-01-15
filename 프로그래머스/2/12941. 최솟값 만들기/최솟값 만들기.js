// function solution(A,B){
//     A = A.sort((a, b) => a - b);
//     B = B.sort((a, b) => b - a);
    
//     let answer = 0;
    
//     for (let i=0; i<A.length; i++) {
//         answer += A[i] * B[i];
//     }
    
//     return answer;
// }

function solution(A,B){
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => b - a);
    
    return A.reduce((acc, cur, idx) => acc + cur * B[idx], 0);
}