function solution(numbers) {
    let result = [];
    let set = new Set();
    for (let i=0; i<numbers.length; i++) {
        for (let j=i+1; j<numbers.length; j++) {
            let sum = numbers[i] + numbers[j];
            set.add(sum);
        }
    }
    result = [...set].sort((a, b) => a - b);
    return result;
}