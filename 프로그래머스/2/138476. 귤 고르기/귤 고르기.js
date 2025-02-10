function solution(k, tangerine) {
    let box = {};
    
    for (let i=0; i<tangerine.length; i++) {
        if (box[tangerine[i]]) {
            box[tangerine[i]]++;
        } else {
            box[tangerine[i]] = 1;
        }
    }
    const orders = Object.values(box).sort((a, b) => b - a);

    let sum = 0;
    let answer = 0;
    for (let i=0; i<orders.length; i++) {
        if (sum >= k) {
            return answer;
        } else {
            sum += orders[i];
        }
        answer++;
    }
    return answer;
}