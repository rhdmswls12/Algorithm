const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));
for (let i = 0; i < input.length - 1; i++) {
  let [a, b] = input[i];
  if (a >= b) {
    if (a % b == 0) console.log("multiple");
    else console.log("neither");
  } else {
    if (b % a == 0) console.log("factor");
    else console.log("neither");
  }
}
