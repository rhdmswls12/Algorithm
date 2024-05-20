function solution(s) {
    let num = Math.trunc(s.length / 2)
    return s.length % 2 ? s[num] : s[num-1] + s[num]
}