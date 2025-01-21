function solution(s) {
    let cnt = 0;
    let zeroCnt = 0;
    
    while (s !== '1') {
        s = s.split('');
        const zero = s.filter(str => str === '0').length;
        zeroCnt += zero;
        
        s = (s.length - zero).toString(2);
        cnt++;
    }
    
    return [cnt, zeroCnt];
}