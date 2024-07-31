function solution(s) {
    const array = s.split(" ").map(Number);
    const max = Math.max(...array)
    const min = Math.min(...array)
    return (min+" "+max)
}