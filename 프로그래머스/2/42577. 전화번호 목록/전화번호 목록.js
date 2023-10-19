function solution(phone_book) {
  let myMap = new Map();

  for (const phone of phone_book) {
    myMap.set(phone, true)
  }
  for (const phone of phone_book) {
    for (let i=1; i<phone.length; i++) {
      const prefix = phone.slice(0, i)
      if (myMap.get(prefix)) {
        return false
      }
    }
  }
  return true
}