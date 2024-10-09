const mapfn = (arg) => Number(arg);
function solution(n){
  let result = n.toString();
  result = Array.from(result,mapfn);
  result = result.reduce((accumulator, currentValue) => accumulator+currentValue,0);
  return result;
}