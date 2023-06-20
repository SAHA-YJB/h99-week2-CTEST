// 하샤드 수
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
// 예를 들어 18의 자릿수 합은 1+8=9이고,
// 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수
// 10 t, 13 f
// function solution(x) {
//   var answer = true;
//   let addNum = (x + "")
//                 .split("")
//                 .map((val) => parseInt(val))
//                 .reduce((acc, cur) => acc + cur, 0);
//   return x % addNum === 0 ? answer : false;
// }

function solution(x) {
  const sum = x
              .toString()
              .split("")
              .map(Number)
              .reduce((acc, cur) => acc + cur, 0);
  return x % sum === 0;
}
console.log(solution(10));
console.log(solution(13));
