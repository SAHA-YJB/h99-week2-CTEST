// 콜라츠
// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
// 주어진 수가 6이라면
// 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 이 되어 총 8번 만에 1이 됩니다.
// 위 작업을 몇 번이나 반복해야 하는지 반환하는 함수,
// solution을 완성해 주세요. 단, 주어진 수가 1인 경우에는 0을,
// 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.

// function solution(num) {
//   var answer = 0;
//   do {
//     if (num === 1) return 0;
//     else if (answer === 500) return -1;
//     num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
//     answer++;
//     if (num === 1) break;
//   } while (num);
//   return answer;
// }
function solution(num) {
  let answer = 0;
  while (num !== 1) {
    if (answer === 500) return -1;
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    answer++;
  }
  return answer;
}
console.log(solution(16));
console.log(solution(626331));
