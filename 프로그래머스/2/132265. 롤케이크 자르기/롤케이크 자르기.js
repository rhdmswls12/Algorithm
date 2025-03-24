function solution(topping) {
    let answer = 0;
    let left_set = new Set();
    
    let right_count = topping.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    
    let right_unique = Object.keys(right_count).length;
    
    for (let i=0; i<topping.length-1; i++) {
        left_set.add(topping[i]);
        right_count[topping[i]]--;
        
        if (!right_count[topping[i]]) right_unique--;

        if (left_set.size === right_unique) answer++;
    }
    
    return answer;
}