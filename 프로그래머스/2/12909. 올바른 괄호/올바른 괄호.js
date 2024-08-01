function solution(s){
    const array = s.split("");
    const stack = [];
    
    const obj = {
        "(": -1,
        ")": 1
    }
    for (let i=0; i<array.length; i++) {
        let curr = array[i];
        if (obj[stack[stack.length-1]]<0 && obj[stack[stack.length-1]]+obj[curr] == 0) {
            stack.pop();
        } else {
          stack.push(curr);  
        }
    }
    return stack.length ? false : true;
}