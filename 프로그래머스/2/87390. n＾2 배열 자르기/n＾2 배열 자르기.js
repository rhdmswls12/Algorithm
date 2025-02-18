function solution(n, left, right) {
    let result = [];
    
    for (let i=left; i<=right; i++) {
        result.push(i);
    }
    
    for (let i=0; i<result.length; i++) {
        result[i] = Math.max(Math.floor(result[i]/n)+1, result[i]%n+1);
    }
    return result;
}
