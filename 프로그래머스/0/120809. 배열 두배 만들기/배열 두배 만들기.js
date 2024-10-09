// 배열 받고 그 배열을 두배만들기
// ex) [1,2,3] => [2,4,6]

function solution(numbers) {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    arr.push(numbers[i] * 2);
  }
  return arr;
}

