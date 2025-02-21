function solution(progresses, speeds) {
    let result = [];
    let stack = [];
    
    for (let i=0; i<speeds.length; i++) {
        progresses[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
    }
    for (let i=0; i<progresses.length; i++) {
        let max = Math.max(...stack);
        let cur = progresses[i];
        
        if (max >= cur) {
            result[result.length-1] += 1;
            max = cur;
        } else {
            result.push(1);
        }
        stack.push(progresses[i]);
    }
    return result;
}