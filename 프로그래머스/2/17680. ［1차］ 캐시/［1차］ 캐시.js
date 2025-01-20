// function solution(cacheSize, cities) {
//     const hit = 1;
//     const miss = 5;
//     let answer = 0;
//     cities = cities.map(city => city.toLowerCase());
    
//     if (cacheSize === 0) return cities.length * miss;
    
//     for (let i=0; i<cities.length; i++) {
//         let check = cities.slice(i, i+cacheSize)
        
//         if (check.includes(cities[i+cacheSize])) {
//             answer += hit;     
//         } else {
//             answer += miss;
//         }
//     }
//     return answer;
// }

function solution(cacheSize, cities) {
    let answer = 0;
    const hit = 1;
    const miss = 5;
    const cache = [];

    cities = cities.map(city => city.toLowerCase());
    
    for (let i=0; i<cities.length; i++) {
        if(cache.includes(cities[i])) {
            answer += hit;
            cache.splice(cache.indexOf(cities[i]),1);
        } else {
            answer += miss;
        }
        cache.push(cities[i]);
        
        if(cache.length > cacheSize) cache.shift();
    }

    return answer;
}
