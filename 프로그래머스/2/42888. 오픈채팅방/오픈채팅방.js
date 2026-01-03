function solution(record) {
    const result = [];
    const enter = `님이 들어왔습니다.`
    const leave = `님이 나갔습니다.`
    
    const map = new Map()
    
    for (const r of record) {
        const [keyword, id, nickname] = r.split(' ');
        
        if (keyword === 'Enter' || keyword === 'Change') {
            map.set(id, nickname);   
        }
    }
    
    for (const r of record) {
        const [keyword, id, nickname] = r.split(' ');
    
        if (keyword === 'Enter') {
            result.push(`${map.get(id)}${enter}`);
        } else if (keyword === 'Leave') {
            result.push(`${map.get(id)}${leave}`);
        } 
    }
    return result;
}