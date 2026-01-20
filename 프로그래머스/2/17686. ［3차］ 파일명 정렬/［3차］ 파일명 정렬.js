function solution(files) {
    const parsed = files.map(parseFile);
    
    parsed.sort((a, b) => {
        if (a.head !== b.head) {
            return a.head.localeCompare(b.head);
        }
        return a.number - b.number;
    })
    
    return parsed.map(v => v.original);
}
function parseFile(file) {
    let head = '';
    let number = '';
    let i = 0;
    
    while (i < file.length && !(file[i] >= '0' && file[i] <= '9')) {
        head += file[i];
        i++;
    }
    while (i < file.length && (file[i] >= '0' && file[i] <= '9')) {
        number += file[i];
        i++;
    }
    
    return {
        head: head.toLowerCase(),
        number: Number(number),
        original: file
    }
}