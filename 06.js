// 0부터 9까지의 숫자 중 일부가 들어있는
// 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아
// 더한 수를 return 하도록 solution 함수를 완성해주세요.

function notIncludes(x) {
  let output = 0;
  for (let i = 0; i <= 9; i++) {
    let notInclude = x.includes(i);
    if (!notInclude) {
      output += i;
    }
  }
  return output;  
}
console.log(notIncludes([1, 2, 3, 5, 6, 9, 0])); // 4, 7, 8 = 19
