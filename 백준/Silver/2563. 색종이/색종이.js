const [cnt, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let map = Array.from(Array(100), () => Array(100).fill(0));
let count = 0;
for (let i = 0; i < cnt[0]; i++) {
  let [x, y] = input[i];
  for (let j = x; j < x + 10; j++) {
    for (let k = y; k < y + 10; k++) {
      if (map[j][k] == 1) continue;
      map[j][k] = 1;
      count++;
    }
  }
}
console.log(count);