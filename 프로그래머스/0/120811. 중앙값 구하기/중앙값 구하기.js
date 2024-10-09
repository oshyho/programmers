function solution(array) {
  let answer = 0;
  answer = array.sort((a, b) => a - b);
  let answerLength = answer.length;
  let answerMiddel = answer[Math.floor(answerLength / 2)];
  return answerMiddel;
}