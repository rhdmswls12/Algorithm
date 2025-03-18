function solution(phone_book) {
    phone_book.sort();
    
    for (let i=0; i<phone_book.length; i++) {
        let cur = phone_book[i];
        
        if (i+1 < phone_book.length && phone_book[i+1].startsWith(cur)) return false;
    }
    return true;
}