function solution(n, t, m, p) {
    let answer = '';
    let num = ''
    
    for (let i=0; i<t*m; i++) {
        num += i.toString(n);
    }
    
    for (let i=0; i<t; i++) {
        let part = num[p-1+i*m];
        answer += part.toUpperCase();
    }
    return answer;
}