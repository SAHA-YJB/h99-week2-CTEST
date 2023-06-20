// 제일 작은 수 제거하기
// 정수를 저장한 배열,
// arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고,
// [10]면 [-1]을 리턴 합니다.

// function solution(arr) {
//   let answer = [];
//   for (const val of arr) {
//     arr.length === 1 ? answer.push(-1) : answer;
//     val > Math.min(...arr) ? answer.push(val) : answer;
//   }
//   return answer;
// }
function solution(arr) {
  const min = Math.min(...arr);
  const filteredArr = arr.filter((val) => val !== min);

  return filteredArr.length > 0 ? filteredArr : [-1];
}
console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
