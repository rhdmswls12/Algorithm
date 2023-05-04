function solution(numbers) {
    let answer = [];
    numbers.map((number, i)=>{
        number *= 2;
        answer.push(number)
        
    })
    return answer
}