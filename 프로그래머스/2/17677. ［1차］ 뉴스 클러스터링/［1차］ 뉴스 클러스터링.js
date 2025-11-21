function solution(str1, str2) {
    const set1 = makeSet(str1);
    const set2 = makeSet(str2);
    let intersection = 0;
    let union = 0;
    
    if (!set1.length && !set2.length) return 65536;
    
    let map1 = new Map();
    let map2 = new Map();
    
    for (const s of set1) {
        map1.set(s, (map1.get(s) || 0) + 1);
    }
    
    for (const s of set2) {
        map2.set(s, (map2.get(s) || 0) + 1);
    }

    const keys = new Set([...map1.keys(), ...map2.keys()]);
    
    for (const key of keys) {
        let count1 = map1.get(key) || 0;
        let count2 = map2.get(key) || 0;
        
        intersection += Math.min(count1, count2);
        union += Math.max(count1, count2);
    }
    
    return Math.floor((intersection / union) * 65536);
    
    function makeSet(str) {
        let result = [];
        const reg = /^[A-Z]+$/;
        
        str = str.toUpperCase();
        
        for (let i=0; i<str.length-1; i++) {
            const cur = str.slice(i, i+2);
            if (reg.test(cur)) {
                result.push(cur);   
            }
        }
        return result;
    }
}