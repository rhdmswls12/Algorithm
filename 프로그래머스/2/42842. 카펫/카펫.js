// (brown + yellow)의 약수 쌍 (w, h)을 구한다.
// 각 (w, h) 쌍에 대해 w >= h인지 확인한다.
// (w - 2) * (h - 2) == yellow를 만족하는지 체크한다.
function solution(brown, yellow) {
    let total = brown + yellow; // 전체 카펫 크기
    
    for (let h=3; h<=Math.sqrt(total); h++) {
        if (total % h === 0) {
            let w = total / h; // w * h = total
            if ((w-2) * (h-2) === yellow) { 
                return [w, h]; // 가로가 더 크거나 같으므로 순서 유지
            }
        }
    }
}