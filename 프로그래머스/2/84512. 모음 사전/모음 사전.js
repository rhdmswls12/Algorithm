function solution(word) {
  let stack1 = ['A', 'E', 'I', 'O', 'U']
  let stack2 = []
  let stack3 = []
  let stack4 = []
  let stack5 = []
  let answer = 0

  stack1.forEach(str => {
    for (let i=0; i<5; i++) {
      stack2.push(str.concat(stack1[i]))
    }
  })

  stack2.forEach(str => {
    for (let i=0; i<5; i++) {
      stack3.push(str.concat(stack1[i]))
    }
  })

  stack3.forEach(str => {
    for (let i=0; i<5; i++) {
      stack4.push(str.concat(stack1[i]))
    }
  })

  stack4.forEach(str => {
    for (let i=0; i<5; i++) {
      stack5.push(str.concat(stack1[i]))
    }
  })
  const words = [...stack1, ...stack2, ...stack3, ...stack4, ...stack5]
  words.sort()
  
  words.forEach((str, i) => {
    if (str === word) {
      answer = i + 1
    }
  })

  return answer
}