function solution(s) {
    let arr = s.split('')
    for (let i=0; i<arr.length; i++) {
        if(!parseInt(arr[i]) && parseInt(arr[i]) !==0 ) return false
    }
    return arr.length === 4 || arr.length === 6 ? true : false
}