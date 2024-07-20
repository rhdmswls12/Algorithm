let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();
input = parseInt(input);

let d = Array(input + 1).fill(0);

for (let i = 2; i <= input; i++) {
  d[i] = d[i - 1] + 1;

  if (i % 2 == 0) {
    d[i] = Math.min(d[i], d[i / 2] + 1);
  }
  if (i % 3 == 0) {
    d[i] = Math.min(d[i], d[i / 3] + 1);
  }
}
console.log(d[input]);
