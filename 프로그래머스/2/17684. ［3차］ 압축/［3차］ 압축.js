function solution(msg) {
    let answer = [];
    let map = new Map();
    
    let idx = 1;
    
    for (let i=65; i<=90; i++) {
        map.set(String.fromCharCode(i), idx++);
    }
    
    let cur = "";
    
    for (let i=0; i<msg.length; i++) {
        const next = cur + msg[i]; 
        
        if (map.has(next)) {
            cur = next;
        } else {
            answer.push(map.get(cur));
            map.set(next, idx++); 
            cur = msg[i]; 
        }
    }
    
    answer.push(map.get(cur));
    
    return answer;
}