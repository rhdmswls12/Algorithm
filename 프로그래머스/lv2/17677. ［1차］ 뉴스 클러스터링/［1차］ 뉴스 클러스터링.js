function solution(str1, str2) {
  str1 = str1.toUpperCase()
  str2 = str2.toUpperCase()

  const makeSet = (str) => {
    let arr = str.split('')
    let array = []
    let regex = /[\W0-9_]/
    let set = []
    for (let i=0; i<arr.length-1; i++) {
      let sum = arr[i] + arr[i+1]
      array.push(sum)
    }
    for (let i=0; i<array.length; i++) {
      if (regex.test(array[i])) {
        continue
      } else {
        set.push(array[i])
      }
    }
    return set
  }

  let set1 = makeSet(str1)
  let set2 = makeSet(str2)

  
  let intersectCount = 0
  set1.forEach(v => {
    if (set2.includes(v)) {
      set2.splice(set2.indexOf(v), 1)
      intersectCount++
    }
  })
  let unionSet = set1.length + set2.length 
  if (unionSet == 0) {
    return 65536
  }

  return Math.trunc((intersectCount / unionSet) * 65536)

}