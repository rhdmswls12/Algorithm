function solution(str1, str2) {
    str1 = str1.toUpperCase().split('');
    str2 = str2.toUpperCase().split('');
    
    const arr1 = makeArr(str1);
    const arr2 = makeArr(str2);
    
    if (!arr1.length && !arr2.length) return 65536;
    
    let same = [];
    let visited = Array(arr2.length).fill(false);
    
    for (let i=0; i<arr1.length; i++) {
        for (let j=0; j<arr2.length; j++) {
            if (!visited[j] && arr1[i] === arr2[j]) {
                same.push(arr1[i]);
                visited[j] = true;
                break;
            }
        }
    }
    console.log('same', same)
    const result1 = same.length;
    console.log(arr1, arr2)
    const result2 = arr1.length + arr2.length - result1;
    
    return Math.floor((result1/result2)*65536);
} 
function makeArr(arr) {
    let result = [];
    for (let i=0; i<arr.length; i++) {
        let sum = '';
        
        if (arr[i+1] 
            && arr[i].charCodeAt() >=65 
            && arr[i].charCodeAt() <=90 
            && arr[i+1].charCodeAt() >=65
            && arr[i+1].charCodeAt() <=90) {
            sum += arr[i]+arr[i+1];
            result.push(sum);
        }
    }
    return result;
}
