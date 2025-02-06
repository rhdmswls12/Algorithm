// a,b의 최소공배수 = a*b / a,b의 최대공약수
function solution(arr) {
    return arr.reduce((acc, cur) => lcm(acc, cur));
}

//최소공배수
function lcm(a, b) {
    return (a*b)/gcd(a, b);
}
//최대공약수 - 유클리드 호제법 사용
function gcd(a, b) {   
    while (b !== 0) {
        let tmp = b;
        b = a % b;
        a = tmp;
    }
    return a;
}