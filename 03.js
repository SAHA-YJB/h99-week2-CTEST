// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
//x

function stringReturn(str) {
  let wordArr = str.split("")
  let len = wordArr.length
  if (len % 2 === 0) {
    return wordArr.slice(len / 2 - 1, len / 2 + 1).join("");
  } else {
    return wordArr[Math.floor(len / 2)]
  } 
}

console.log(stringReturn("abcde"));
console.log(stringReturn("qwer"));


