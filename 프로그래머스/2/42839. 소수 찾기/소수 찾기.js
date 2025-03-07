function solution(numbers) {
    let answer = 0;
    let set = new Set();
    
    function permutation(arr, fixed) { 
        if (fixed.length) set.add(Number(fixed));

        for (let i=0; i<arr.length; i++) {
            let newArr = [...arr];
            newArr.splice(i, 1); 
            permutation(newArr, fixed+arr[i]); 
        }
    }
    function isPrime(num) {
        if (num < 2) return false;
        
        for (let i=2; i<Math.floor(Math.sqrt(num)+1); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    permutation(numbers.split(''), "");
    
    const numArray = [...set];
    
    for (let i=0; i<numArray.length; i++) {
        if (isPrime(numArray[i])) answer++;
    }
    
    return answer;
}
