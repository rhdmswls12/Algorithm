const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input2.txt")
  .toString()
  .trim()
  .split(" ");
let a = Number(input[0]);
let b = input[1];
let count = 0;
for (let i = 0; i <= a; i++) {
  for (let j = 0; j <= 59; j++) {
    for (let k = 0; k <= 59; k++) {
      if (
        i.toString().padStart(2, 0).includes(b) ||
        j.toString().padStart(2, 0).includes(b) ||
        k.toString().padStart(2, 0).includes(b)
      )
        // if (
        //   i % 10 == b ||
        //   i / 10 == b ||
        //   j % 10 == b ||
        //   j / 10 == b ||
        //   k % 10 == b ||
        //   k / 10 == b
        // )
        count++;
    }
  }
}
console.log(count);
