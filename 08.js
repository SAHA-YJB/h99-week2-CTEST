// 정수를 담고 있는 배열 arr의 
// 평균값을 return하는 함수, solution을 완성해보세요.
// [1,2,3,4]	2.5
// [5,5]	5

const average = function (x) {
  let sum = 0
  for (let i = 0; i < x.length; i++) {
    sum += x[i]
  }
  let ave = sum / x.length
  return ave
}

console.log(average([1,2,3,4]))