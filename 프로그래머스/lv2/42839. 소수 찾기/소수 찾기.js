function solution(numbers) {
  let numbersArray = numbers.split('') // ['1','7']
  let result = []
  let answer = []
  
  const getNumbers = (arr, str) => { //초기-['1','7'],'' 0번째 반복에서의 재귀-['7'],'1'
                                     //1번째 반복-['1'],'7'
    if (arr.length > 0) {
      for (let i=0; i<arr.length; i++) {
        const temp = [...arr]; // splice()는 배열 원본이 변경되기 때문에 temp에 복사
        temp.splice(i, 1); //0번째 요소 1개 삭제
        //0번째 반복-['7']
        //0번째 반복에서의 재귀-[]

        //1번째 반복-['1']
        //1번째 반복에서의 재귀-[]
        getNumbers(temp, str+arr[i]) //0번째 반복-['7'], '1' //0번째 반복에서의 재귀-[], '17'->배열 길이가 0이므로 반복 종료 
                                     //1번째 반복-['1'], '7' //1번째 반복에서의 재귀-[], '71'->배열 길이 0되니까 반복 종료
       isPrime(parseInt(str+arr[i])) //17 1 71 7
      }
      
    }
  }

  const isPrime = (num) => {
    let count = 0
      for (let i=1; i<=num; i++){
        if (num%i == 0) {
          count++;
        } 
        if (count > 2) {
          break;
        }
      }
      if (count==2 && !answer.includes(num)) {
        answer.push(num)
      }
  }

  getNumbers(numbersArray, '')
  
 return(answer.length)
}