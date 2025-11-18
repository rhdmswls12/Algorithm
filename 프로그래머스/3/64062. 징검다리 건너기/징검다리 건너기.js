// function solution(stones, k) {
//     let result = [];
    
//     for (let i=0; i<stones.length - k + 1; i++) {
//         result.push(Math.max(...stones.slice(i, i + k)));
//     }
    
//     return Math.min(...result);
// }
function solution(stones, k) {
    let min = 1;
    let max = 200000000;
    
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        
        if (canCross(mid)) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
    
    function canCross(mid) {
        let count = 0;
        
        for (let stone of stones) {
            if (stone < mid) {
                count++;
                if (count >= k) return false;
            } else {
                count = 0;
            }
        }
        
        return true;
    }
    
    return max;
}