//  자연수 N이 주어지면,
// N의 각 자릿수의 합을 구해서 return 하는 solution 함수
// N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

function solution(n) {
  var answer = 0;
  let word = String(n);
  answer = word
          .split('')
          .reduce((acc,cur)=> acc + parseInt(cur),0)
  return answer 
}
console.log(solution(123))
