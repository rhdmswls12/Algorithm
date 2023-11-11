function solution(s) {
  let answer = []
  s = s.toLowerCase().split('')
    
  if (!Number(s[0])) s[0] = s[0].toUpperCase()
  for (let i=1; i<s.length; i++) {
      if (s[i-1] === ' ' && s[i] !== ' ') s[i] = s[i].toUpperCase()
  }
  return s.join('')
}