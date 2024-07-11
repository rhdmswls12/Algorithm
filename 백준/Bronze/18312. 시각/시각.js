const [N, K] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input2.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let count = 0;
for (let h = 0; h <= N; h++) {
  for (let m = 0; m <= 59; m++) {
    for (let s = 0; s <= 59; s++) {
      if (
        h.toString().padStart(2, "0").includes(K) ||
        m.toString().padStart(2, "0").includes(K) ||
        s.toString().padStart(2, "0").includes(K)
      )
        count++;
    }
  }
}
console.log(count);
