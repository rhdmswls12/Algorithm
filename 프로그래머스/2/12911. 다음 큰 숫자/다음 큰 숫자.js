function solution(n) {
    const check = n.toString(2).split('').filter(binary => binary === '1').length;
    let next = n+1;
    while(true) {
        if (check === next.toString(2).split('').filter(binary => binary === '1').length) {
            return next;
        }
        next++;
    }
}