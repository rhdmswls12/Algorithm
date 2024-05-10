function solution(s){
    let arr = s.toLowerCase().split('');
    let count = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === 'p') {
            count++;
        } else if (arr[i] === 'y') {
            count--;
        }
    }
    return count ? false : true;
}