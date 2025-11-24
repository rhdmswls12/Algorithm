function solution(word) {
    const index = ['A', 'E', 'I', 'O', 'U'];
    const weight = [781, 156, 31, 6, 1];
    let answer = 0;
    
    for (let i=0; i<word.length; i++) {
        answer += (index.indexOf(word[i]) * weight[i]) + 1;
    }
    
    return answer;
}