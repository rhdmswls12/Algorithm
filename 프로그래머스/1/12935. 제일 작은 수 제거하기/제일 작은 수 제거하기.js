function solution(arr) {
    let answer = [];
    let min = Math.min(...arr);
    if (arr.length === 1) return [-1];
    answer = arr.filter(num => num !== min);
    return answer;
}