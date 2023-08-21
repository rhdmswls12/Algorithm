function solution(cacheSize, cities) {
  let data = []
  let time = 0
  
  cities.map((a, i) => {
    cities[i] = cities[i].toLowerCase()
  })
  
  if (cacheSize == 0) return cities.length * 5
  
  for (let i=0; i<cities.length; i++) {
    const idx = data.findIndex(a => a == cities[i])
    if (idx !== - 1) {
      data.splice(idx, 1)
      time += 1
    } else if (data.length == cacheSize) {
      data.shift()
      time += 5
    } else {
      time += 5
    }
    data.push(cities[i])
  }  
  return time
}