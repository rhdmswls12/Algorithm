function solution(want, number, discount) {
    let result = 0;
    let arr = [];
    const sum = number.reduce((acc, cur) => acc + cur, 0);
    
    for (let i=0; i<want.length; i++) {
        for (let j=0; j<number[i]; j++) {
            arr.push(want[i]);
        }
    }
    arr.sort();
    const wants = makeObj(arr);
    
    for (let i=0; i<discount.length - sum + 1; i++) {
        let check = makeObj(discount.slice(i, i + sum).sort());

        if (JSON.stringify(check) === JSON.stringify(wants)) {
            result++;
        }
    }
    return result;
}
function makeObj(arr) {
    let obj = {};
    
    for (let i=0; i<arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }
    return obj;
}