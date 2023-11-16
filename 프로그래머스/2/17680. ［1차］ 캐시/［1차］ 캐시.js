function solution(cacheSize, cities) {
    let time = 0
    let cache = []
    
    if (!cacheSize) return 5 * cities.length;
    
    cities.forEach(city => {
        city = city.toUpperCase()
        let idx = cache.indexOf(city)
        
        if (idx !== -1) {
            time += 1
            cache.splice(idx, 1)
        } else {
            time += 5
            if (cache.length >= cacheSize) {
                cache.shift()
            }
        }
        cache.push(city)
    })
    return time
}