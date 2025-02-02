function solution(people, limit) {
    let count = 0;
    people.sort((a, b) => a - b);
    
    while (people.length) {
        for (let i=0; i<people.length; i++) {
            if (people[0] + people[people.length-1] <= limit) {
                people.shift();
                people.pop();
            } else {
                people.pop();
            }
            count++;
        }        
    }
    return count;
}