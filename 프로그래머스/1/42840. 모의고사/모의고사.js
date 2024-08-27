function solution(answers) {
    const first = [1,2,3,4,5];
    const second = [2,1,2,3,2,4,2,5];
    const third = [3,3,1,1,2,2,4,4,5,5];
    let count = [0,0,0];
    let result = [];
    const len = answers.length;
    
    for (let i=0; i<len; i++) {
       if (answers[i] === first[i%5]) count[0]++;
       if (answers[i] === second[i%8]) count[1]++;
       if (answers[i] === third[i%10]) count[2]++;
    }
    
    const max = Math.max(...count);
    
    for (let i=0; i<3; i++) {
        if (count[i] === max) result.push(i+1)
    }
    return result;
}