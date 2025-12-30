function solution(s){
    let answer = 0;
    
    for (const el of s) {
        if (answer > 0 && el === ')') {
            answer--;
        } else {
            answer++;
        }
    }
    
    return answer ? false : true;
}