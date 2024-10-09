function solution(sides){
    let result = sides.sort((a,b)=>a-b);
    if((result[0]+result[1])>result[2]){
        return 1;
    }else{
        (result[0]+result[1])<=result[2]
        return 2;
    }
}

let testCase1 = [1,2,3]; //2
let testCase2 = [3,6,2]; //2
let testCase3 = [199,72,222]; //1