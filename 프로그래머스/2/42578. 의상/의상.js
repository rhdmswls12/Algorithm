function solution(clothes) {
    const types = {};
    let result = 1;
    
    for (let i=0; i<clothes.length; i++) {
        if (types[clothes[i][1]]) {
            types[clothes[i][1]]++;
        } else {
            types[clothes[i][1]] = 1;
        }
    }
    const arr = Object.values(types);
    
    for (let i=0; i<arr.length; i++) {
        result *= (arr[i] + 1);
    }
    return result - 1;
}


