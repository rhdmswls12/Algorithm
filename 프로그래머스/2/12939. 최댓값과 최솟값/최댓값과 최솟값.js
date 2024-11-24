function solution(s) {
    // let nums = s.split(" ").map(e => Number(e));
    // return Math.min(...nums) + " " + Math.max(...nums);
    let arr = s.split(' ');
    return Math.min(...arr) + " " + Math.max(...arr);
}