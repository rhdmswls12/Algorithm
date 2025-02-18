function solution(want, number, discount) {
    let result = 0;
    
    const check = (map) => {
        for (let j=0; j<number.length; j++) {
            if (number[j] !== map.get(want[j])) return false;
        }
        return true;
    }
    for (let i=0; i<=discount.length-10; i++) {
        let map = new Map();
        let slice = discount.slice(i, i+10);
        slice.forEach(a => map.set(a, (map.get(a) || 0) + 1));
        
        if (check(map)) result++;
    }
    return result;
}
