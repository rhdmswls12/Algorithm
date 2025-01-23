function solution(n) {
    const older = n.toString(2).split('').filter((str) => str === '1').length;
    let newer;
    while(newer !== older) {
        newer = (n+1).toString(2).split('').filter((str) => str === '1').length;
        n++;
    }
    return n;
}