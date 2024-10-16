function solution(my_string) {
  let result = [];
  let split = my_string.split('');
  for (let i = 0; i < split.length; i++) {
    // 숫자인지 확인하여 숫자일 경우 result에 추가
    if (!isNaN(split[i]) && split[i] !== ' ') {
      result.push(Number(split[i]));
    }
  }
  // result 배열의 숫자들의 합을 반환
  return result.reduce((acc, curr) => acc + curr, 0);
}