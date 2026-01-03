function solution(priorities, location) {
    const queue = [];
    const order = [];
    let idx = 0;
    let maxPriority = Math.max(...priorities);
    
    for (let i=0; i<priorities.length; i++) {
        queue.push([i, priorities[i]]);
    }
    
    while (queue.length) {
        const cur = queue.shift();
        const curP = priorities.shift();
        const [idx, priority] = cur;
        
        if (priority === maxPriority) {
            order.push(idx);
            maxPriority = Math.max(...priorities);
        } else {
            queue.push(cur);
            priorities.push(curP);
        }
    }
    
    return order.indexOf(location) + 1;
}