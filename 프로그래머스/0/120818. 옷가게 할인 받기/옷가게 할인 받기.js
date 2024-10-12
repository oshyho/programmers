function solution(price) {
  if (100000 <= price && price < 300000) {
    return Math.floor(Number(price * 0.95));
  } else if (300000 <= price && price < 500000) {
    return Math.floor(Number(price * 0.90));
  } else if (500000 <= price) {
    return Math.floor(Number(price * 0.80));
  }else{
return Math.floor(Number(price))}
}