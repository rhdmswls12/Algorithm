function solution(s) {
    let nums = s.split(" ").map(e => Number(e));
    return Math.min(...nums) + " " + Math.max(...nums);
}