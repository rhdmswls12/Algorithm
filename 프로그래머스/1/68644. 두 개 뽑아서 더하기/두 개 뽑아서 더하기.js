function solution(numbers) {
    let set = new Set()
    numbers = numbers.sort((a, b) => a - b)
    for (let i=0; i<numbers.length; i++) {
        for (let j=i+1; j<numbers.length; j++) {
            set.add(numbers[i] + numbers[j])
        }
    }
    return [...set].sort((a, b) => a - b)
}