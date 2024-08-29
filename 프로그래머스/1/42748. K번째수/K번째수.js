function solution(array, commands) {
    const result = [];
    
    for (let i=0; i<commands.length; i++) {
        const [start,end,target] = commands[i];
        let slicedArr = array.slice(start-1, end).sort((a,b) => a - b);
        result.push(slicedArr[target-1]);
    }
    return result;
}