function solution(A,B){
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    const sum = A.reduce((acc, cur, idx) => (acc + cur * B[idx]), 0)
    return sum;
}