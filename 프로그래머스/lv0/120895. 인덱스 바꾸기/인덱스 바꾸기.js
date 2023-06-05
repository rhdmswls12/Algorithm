function solution(my_string, num1, num2) {
  let array = []
  let str1 = ''
  let str2 = ''
  array = my_string.split('')
  str1 = array[num1]
  str2 = array[num2]
  array[num1] = str2
  array[num2] = str1
  return(array.join(''))
}