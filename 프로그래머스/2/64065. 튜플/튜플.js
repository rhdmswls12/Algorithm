function solution(s) {
    const arr = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"));
    arr.sort((a, b) => a.length - b.length);
    
    let set = new Set();
    
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr[i].length; j++) {
            set.add(arr[i][j]);
        }
    }
    const answer = [...set];
    return answer;
}
