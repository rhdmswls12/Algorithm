function solution(s) {
    const set = new Set();
    
    s = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']')).sort((a, b) => {
        return a.length - b.length
    });
    for (const arr of s) {
        for (const a of arr) {
            set.add(a);
        }
    } 
    return [...set];
}