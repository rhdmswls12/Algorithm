function solution(cacheSize, cities) {
    let time = 0
    let cache = []
    
    cities.forEach((city, i) => cities[i] = cities[i].toUpperCase())
    
    if (!cacheSize) return cities.length*5
    
    for (let i=0; i<cities.length; i++) {
        if (cache.includes(cities[i])) {
            time+=1
            let idx = cache.findIndex(c => c === cities[i])
            cache.splice(idx, 1)
        } else {
            time+=5
        }
        if (cache.length === cacheSize) {
            cache.shift()
            cache.push(cities[i])
        } else {
            cache.push(cities[i])
        }
    }
    return time
}