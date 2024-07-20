const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
let n = Number(input.shift());
let schedule = input.map((el) => el.split(" ").map(Number));

schedule.sort((a, b) => {
  if (a[1] == b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});
let confirmed = schedule[0];
let count = 1;
for (let i = 1; i < n; i++) {
  if (schedule[i][0] >= confirmed[1]) {
    confirmed = schedule[i];
    count++;
  }
}
console.log(count);
