function solution(topping) {
    let count = 0;
    let left = new Map();
    let right = new Map();
    
    for (let i=0; i<topping.length; i++) {
        right.set(topping[i], (right.get(topping[i]) || 0) + 1);
    }
    
    for (let i=0; i<topping.length; i++) {
        
        left.set(topping[i], (left.get(topping[i]) || 0) + 1);
        right.set(topping[i], (right.get(topping[i]) - 1));
        
        if (!right.get(topping[i])) right.delete(topping[i]);
        
        if (left.size === right.size) {
            count++;
        }
    }

    return count;
}