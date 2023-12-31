// 가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에
// 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다.
// 하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로)
// 크기의 지갑으로 모든 명함들을 수납할 수 있습니다.
// 이때의 지갑 크기는 4000(=80 x 50)입니다.
// 모든 명함의 가로 길이와 세로 길이를 나타내는
// 2차원 배열 sizes가 매개변수로 주어집니다.
// 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때,
// 지갑의 크기를 return
let a = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];
function solution(sizes) {
  let minWidth = 0;
  let minHeight = 0;
  for (let [width, height] of sizes) {
    minWidth = Math.max(minWidth, Math.min(width, height));
    minHeight = Math.max(minHeight, Math.max(width, height));
  }
  return minWidth * minHeight;
}
console.log(solution(a))