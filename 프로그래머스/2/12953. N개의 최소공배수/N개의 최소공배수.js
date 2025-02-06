// a,b의 최소공배수 = a*b / a,b의 최대공약수
function solution(arr) {
    let answer = lcm(arr[0], arr[1]);
    
    for (let i=2; i<arr.length; i++) {
        answer = lcm(answer, arr[i]);
    }
    return answer;
}

//최소공배수
function lcm(a, b) {
    return (a*b)/gcd(a, b);
}
//최대공약수
function gcd(a, b) {
    let multi = a*b;
    let arr = [];
    
    for (let i=1; i<=multi; i++) {
        if (multi % i === 0) arr.push(i);
    }
    for (let i=arr.length-1; i>=0; i--) {
        if ((a % arr[i] === 0) && (b % arr[i] === 0)) return arr[i];
    }
}