function solution(numbers) {
    let sum = numbers.reduce((acc, cur) => acc+cur, 0)
    return 45 - sum;
}