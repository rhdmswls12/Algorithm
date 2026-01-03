function solution(numbers) {
    const result = new Set();
    const visited = Array(numbers.length).fill(false);
    
    function backtrack(path) {
        if (path.length) {
            const num = Number(path.join(""));
            if (isPrime(num)) {
                result.add(num);
            }
        }
        for (let i=0; i<numbers.length; i++) {
            if (visited[i]) continue;
            visited[i] = true;
            path.push(numbers[i]);
            backtrack(path);
            path.pop();
            visited[i] = false;
         }
    }
    
    backtrack([]);
    return result.size;
}

function isPrime(num) {
    if (num < 2) return false;

    for (let i=2; i<=Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) return false;
    }
    return true;
}