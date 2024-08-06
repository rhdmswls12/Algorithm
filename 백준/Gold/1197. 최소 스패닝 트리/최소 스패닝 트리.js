const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const [v, e] = input.shift().split(" ").map(Number);
const arr = input.map((el) => el.split(" ").map(Number));

function kruscal(n, arr) {
  // 부모 노드 찾기
  function getParent(set, x) {
    if (set[x] == x) return x;
    return (set[x] = getParent(set, set[x]));
  }

  // 두 개의 노드를 같은 부모 노드로 병합
  function unionParent(set, a, b) {
    a = getParent(set, a);
    b = getParent(set, b);

    // 더 작은 값으로 부모 노드 할당
    if (a < b) set[b] = a;
    else set[a] = b;
  }

  // 같은 부모 노드를 갖는지 확인
  function findParent(set, a, b) {
    a = getParent(set, a);
    b = getParent(set, b);

    if (a == b) return true;
    else return false;
  }

  // 간선의 비용을 기준으로 오름차순 정렬
  arr.sort((a, b) => a[2] - b[2]);

  const set = new Array(n);
  for (let i = 1; i <= n; i++) {
    set[i] = i;
  }

  let coast = 0;
  for (let i = 0; i < arr.length; i++) {
    // 동일한 부모를 가리키지 않는 경우에 선택(사이클이 발생하지 않는 경우)
    if (!findParent(set, arr[i][0], arr[i][1])) {
      coast += arr[i][2]; // 비용 추가
      unionParent(set, arr[i][0], arr[i][1]); // 노드 연결
    }
  }
  return coast;
}
const result = kruscal(v, arr);
console.log(result);
