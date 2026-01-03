function solution(cacheSize, cities) {
    const hit = 1;
    const miss = 5;
    let time = 0;
    const arr = [];
    
    if (cacheSize === 0) return cities.length * miss;
    
    for (let city of cities) {
        city = city.toUpperCase();
        
        if (arr.length < cacheSize) {
            if (arr.includes(city)) {
                time += hit;
            } else {
                time += miss;
            }
            arr.push(city);
        } else if (arr.includes(city)) {
            const idx = arr.indexOf(city);
            arr.splice(idx, 1);
            arr.push(city);
            time += hit;
        } else {
            arr.shift();
            arr.push(city);
            time += miss;
        }
    }
    return time;
}