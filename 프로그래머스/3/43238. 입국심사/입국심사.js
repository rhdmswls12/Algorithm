function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n;
    let answer = right;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let count = times.reduce((sum, time) => sum + Math.floor(mid / time), 0);
        
        if (count >= n) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return answer;
}