let count = 0;
function solution(num) {
    if (num === 1) return count;
    if (count === 500) return -1;
    
    if (num % 2) {
        num = num * 3 + 1;
    } else {
        num = num / 2;
    }
    
    count++;
    
    return solution(num);
}