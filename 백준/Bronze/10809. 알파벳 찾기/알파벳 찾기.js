const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("");
let alphabet = {};
for (let i = 97; i <= 122; i++) {
  alphabet[`${String.fromCharCode(i)}`] = -1;
}
for (let i = 0; i < input.length; i++) {
  for (let key in alphabet) {
    if (alphabet[key] !== -1) continue;
    if (input[i] == key) {
      alphabet[key] = i;
    }
  }
}
console.log(Object.values(alphabet).join(" "));