//  문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로,
// 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수
// "try hello world"	"TrY HeLlO WoRlD"
// 세세세세
function solution(s) {
  var answer = "";
  let word = s.split(" ");
  let changeWords = word.map((val) => {
    let changeWord = "";
    for (let i = 0; i < val.length; i++) {
      i % 2 === 0
        ? (changeWord += val[i].toUpperCase())
        : (changeWord += val[i].toLowerCase());
    }
    return changeWord;
  });
  return (answer = changeWords.join(" "));
}
console.log(solution("try hello world"));
