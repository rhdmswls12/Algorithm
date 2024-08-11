function solution(n) {
    const currBinary = n.toString(2).split("").filter(binary => binary == '1').length
    
    let newBinary;
    while(currBinary != newBinary) {
        n++;
        newBinary = n.toString(2).split("").filter(binary => binary == '1').length
    }
    return n;
}
