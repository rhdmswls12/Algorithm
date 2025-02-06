// (brown + yellow)의 약수 쌍 (w, h)을 구한다.
// 각 (w, h) 쌍에 대해 w >= h인지 확인한다.
// (w - 2) * (h - 2) == yellow를 만족하는지 체크한다.
function solution(brown, yellow) {
    let answer = [];
    let nums = [];
    for (let i=1; i<=brown+yellow; i++) {
        if ((brown+yellow) % i === 0) {
            nums.push(i);
        }
    }
    for (let i=nums.length-1; i>0; i--) {
        for (let j=0; j<nums.length; j++) {
            let w = nums[i];
            let h = nums[j];
            if (w>=h && (w-2)*(h-2)===yellow) {
                answer = [w, h];
            }
        }
    }
    console.log(answer);
    return answer;
}