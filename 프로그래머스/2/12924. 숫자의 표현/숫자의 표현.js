// 약수 중에서 홀수의 개수
function solution(n) {
    let answer = 0;
    
    for (let i=1; i<=n; i++) {
        if (n % i === 0 & i%2) {
            answer += 1;
        }
    }
    return answer;
}