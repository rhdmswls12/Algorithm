function solution(n, k) {
    let answer = 0;
    
    const numArr = n.toString(k).split('0');
    
    for (const num of numArr) {
        if (isPrime(num)) answer++;
    }
    
    return answer;
    
    function isPrime(num) {
        if (num < 2) return false;
        
        for (let i=2; i<=Math.floor(Math.sqrt(num)); i++) {
            if (num % i === 0) return false;
        }
        
        return true;
    }
}