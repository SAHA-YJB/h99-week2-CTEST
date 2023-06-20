// 당첨 번호	31	10	45	1	6	19	결과
// 최고 순위 번호	31	0→10	44	1	0→6	25	4개 번호 일치, 3등
// 최저 순위 번호	31	0→11	44	1	0→7	25	2개 번호 일치, 5등
// 알아볼 수 없는 두 개의 번호를 각각 10, 6이라고 가정하면 3등에 당첨될 수 있습니다.
// 하지만, 2등 이상으로 만드는 것은 불가능합니다.
// 알아볼 수 없는 두 개의 번호를 각각 11, 7이라고 가정하면 5등에 당첨될 수 있습니다.
// 하지만, 6등(낙첨)으로 만드는 것은 불가능합니다.
// 민우가 구매한 로또 번호를 담은 배열 lottos,
// 당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다.
//  이때, 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return
// [44, 1, 0, 0, 31, 25]	[31, 10, 45, 1, 6, 19]	[3, 5]

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  let sameNum = lottos.filter(val => win_nums.includes(val)).length;
  let zeroNum = lottos.filter(val => val ===0).length;
  let maxNum = sameNum + zeroNum;
  return [rank[maxNum], rank[sameNum]];
}
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))