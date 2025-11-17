function solution(skill, skill_trees) {
    let answer = 0;
    
    for (let i=0; i<skill_trees.length; i++) {
        if (compare(skill, skill_trees[i])) answer++;
    }
    return answer;
}

const compare = (skill, t) => {
    
    for (let i=1; i<skill.length; i++) {
        let cur = t.indexOf(skill[i]); // d -1
        let prev = t.indexOf(skill[i - 1]); // b 3
        
        if (cur !== -1) {
            if (cur < prev || prev === -1) return false;
        }
    }
    return true;
}