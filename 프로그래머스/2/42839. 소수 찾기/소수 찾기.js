function solution(numbers) {
    let answer = 0;
    const nums = permute(numbers);
    
    for (const num of nums) {
        if (isPrime(Number(num))) answer++;
    }
    
    function permute(str) {
      const result = new Set();
      const visited = Array(str.length).fill(false);

      function backtrack(path) {
        if (path.length && path[0] !== '0') {
          result.add([...path].join(''));
        }

        for (let i = 0; i < str.length; i++) {
          if (visited[i]) continue;
          visited[i] = true;
          path.push(str[i]);
          backtrack(path);
          path.pop();
          visited[i] = false;
        }
      }

      backtrack([]);
      return [...result];
    }
        
    function isPrime(num) {
        if (num < 2) return false;
        
        for (let i=2; i<=Math.floor(Math.sqrt(num)); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    return answer;
}