function solution(n) {
    const check = n.toString(2).match(/1/g).length;
    while(n++) {
        if (check === n.toString(2).match(/1/g).length) {
            return n;
        }
    }
}