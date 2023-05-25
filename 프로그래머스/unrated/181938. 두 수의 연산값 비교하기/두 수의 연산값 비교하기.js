function solution(a, b) {
  let left = parseInt(a.toString() + b.toString());
  let right = 2 * a * b;
  if(left > right || left == right) {
    return left
  } else {
    return right
  }
}