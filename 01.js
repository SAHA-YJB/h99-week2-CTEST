// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 
// 세로의 길이가 m인 직사각형 형태를 출력해보세요.

function printStar(n, m) {
  let star = "";
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      star += "*";
    }
    star += "\n";
  }
  return star;
}
console.log(star(5, 3))
