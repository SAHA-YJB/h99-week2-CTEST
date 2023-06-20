// 자연수 n이 매개변수로 주어집니다. 
// n을 3진법 상에서 앞뒤로 뒤집은 후, 
// 이를 다시 10진법으로 표현한 수를 
// return 
// n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
// 45	         1200	      0021	        7
function solution(n) {
  let chanegeNum = n.toString(3).split('').reverse().join('');
  return parseInt(chanegeNum, 3);
}
console.log(solution(45))