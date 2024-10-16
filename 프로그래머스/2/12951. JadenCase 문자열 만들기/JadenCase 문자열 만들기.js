function solution(s) {
    let answer = []
    const str = s.toLowerCase().split("");
    answer.push(str[0].toUpperCase());
    for (let i=1; i<str.length; i++) {
        if (answer[answer.length-1] === ' ') {
            answer.push(str[i].toUpperCase())
        } else {
            answer.push(str[i]);
        }
    }
    return answer.join('');
}