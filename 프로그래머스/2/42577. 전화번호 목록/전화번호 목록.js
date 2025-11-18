function solution(phone_book) {
    phone_book.sort();
    
    let cur = phone_book[0];
    
    for (let i=1; i<phone_book.length; i++) {
        if (phone_book[i].startsWith(cur)) return false;
        
        cur = phone_book[i];
    }
    
    return true;
}