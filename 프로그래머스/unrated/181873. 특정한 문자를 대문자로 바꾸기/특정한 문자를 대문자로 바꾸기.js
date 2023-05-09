function solution(my_string, alp) {
  let array = []
  let upper = ""
  let result = ""
  let value = []
  array=my_string.split("")
  let found = array.map((a, i) => {
    if (a === alp){
      return a
    }
  })
  value = found.filter(a => a)
  if (value[0]){
    array.map((a, i) => {
      if(a == value[0]){
        upper = array[i].toUpperCase()
        array[i] = upper
        result = array.join("")
      }
    })
  } else {
    result = array.join("")
  }
  return result
}