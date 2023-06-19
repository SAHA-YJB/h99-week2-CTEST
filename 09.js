// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때,
// 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때,
// 전화번호의 뒷 4자리를 제외한 나머지 숫자를
// 전부 *으로 가린 문자열을 리턴하는 함수 완성
// "01033334444"	"*******4444"
// "027778888"	"*****8888"


// function maskPhoneNumber(phone_number) {
//   const len = phone_number.length;
//   const star = "*".repeat(len - 4) + phone_number.slice(len - 4);
//   return star;
// }
// console.log(maskPhoneNumber("01033334444"));

const phonenumber1 = (a) => a = a.split("")
                                  .fill('*', 0, a.length-4)
                                  .join('');
console.log(phonenumber1('01033334444'))