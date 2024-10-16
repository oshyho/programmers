function solution(money){
  let americano = 5500;
  let max_americano = Math.floor(money/americano);
  let remian_money = money - americano*max_americano;
  let result = [max_americano, remian_money]
  return result;
}