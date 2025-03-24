// function solution(topping) {
//     let answer = 0;
    
//     for (let i=0; i<topping.length-1; i++) {
//         const slice1 = new Set(topping.slice(0, i+1));
//         const slice2 = new Set(topping.slice(i+1));
        
//         if (slice1.size === slice2.size) answer++;
//     }
//     return answer;
// }

function solution(topping) {
    let answer = 0;
    let left_set = new Set();
    let right_set = new Set(topping);
    let right_count = {};
    
    topping.forEach(el => {
        right_count[el] = right_count[el] ? right_count[el]+1 : 1;
    })
    
    for (let i=0; i<topping.length-1; i++) {
        left_set.add(topping[i]);
        if (right_count[topping[i]] > 1) {
            right_count[topping[i]]--;
        } else {
            right_set.delete(topping[i]);
            right_count[topping[i]]--;
        }

        if (left_set.size === right_set.size) answer++;
    }
    return answer;
}