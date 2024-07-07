let [T, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const q = 25;
const d = 10;
const n = 5;
const p = 1;
for (let i = 0; i < T; i++) {
  let coins = [0, 0, 0, 0];
  while (input[i]) {
    if (input[i] == 0) break;
    if (input[i] >= 25) {
      coins[0] += Math.floor(input[i] / 25);
      input[i] = input[i] % 25;
    } else if (input[i] >= 10) {
      coins[1] += Math.floor(input[i] / 10);
      input[i] = input[i] % 10;
    } else if (input[i] >= 5) {
      coins[2] += Math.floor(input[i] / 5);
      input[i] = input[i] % 5;
    } else {
      coins[3] += input[i];
      input[i] = 0;
    }
  }
  console.log(coins.join(" "));
}
