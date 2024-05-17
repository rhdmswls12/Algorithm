function solution(phone_number) {
    let len = phone_number.length
    let str = ''
    for (let i=0; i<len-4; i++) {
        str += '*'
    }
    return(str + phone_number.slice(len-4))
}