function solution(s) {
    const mixVal = Math.min(...s.split(" "))
    const maxVal = Math.max(...s.split(" "))
    return mixVal + " " + maxVal;
}