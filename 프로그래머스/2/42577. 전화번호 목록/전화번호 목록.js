function solution(phone_book) {
    phone_book.sort();
    
    for (let i=0; i<phone_book.length-1; i++) {
        let cur = phone_book[i];
        
        if (phone_book[i+1].startsWith(cur)) return false;
    }
    return true;
}