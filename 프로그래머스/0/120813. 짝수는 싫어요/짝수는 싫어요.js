function solution(n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(i);
    for (let z = 0; z <= n; z++)
      if (result[z] % 2 === 0) {
        result.pop(z);
      }
  }
  return result;
}