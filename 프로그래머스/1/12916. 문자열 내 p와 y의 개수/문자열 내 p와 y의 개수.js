function solution(s){
    let p = 0;
    let y = 0;
    s = s.toUpperCase();
    for (let str of s) {
        if (str === 'P') {
            p++;
        } else if (str === 'Y') {
            y++;
        }
    }
    if (!p && !y) return true;
    return p === y ? true : false;
}