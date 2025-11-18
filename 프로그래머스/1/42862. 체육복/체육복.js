function solution(n, lost, reserve) {
    
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    // 중복 학생
    const overlap = lost.filter(x => reserve.includes(x));
    
    const realLost = lost.filter(x => !overlap.includes(x));
    const realReserve = reserve.filter(x => !overlap.includes(x));
    
    const queue = [...realReserve];
    
    while (queue.length) {
        const cur = queue.shift();
        
        for (let i=0; i<realLost.length; i++) {
        
            if (realLost[i] === cur - 1) {
                realLost.splice(i, 1);
            } else if (realLost[i] === cur + 1) {
                realLost.splice(i, 1);
            }
        }
    }
    
    return n - realLost.length;
}