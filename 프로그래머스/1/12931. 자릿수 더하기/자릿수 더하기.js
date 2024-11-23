function solution(n){
    let nums = n.toString().split('').map(s => Number(s));
    return nums.reduce((acc, cur) => acc + cur, 0);
}