// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수,
// solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
// 5 4 3
function addAll(a, b) {
  let output = 0;
  if (a > b) {
    for (let i = b; i <= a; i++) {
      output += i;
    }
    return output;
  } else {
    for (let i = a; i <= b; i++) {
      output += i;
    }
    return output;
  }
}
console.log(addAll(3, 5));
