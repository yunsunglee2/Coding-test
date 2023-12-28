function solution(a, b) {
    var answer = 0;
    let g;
    // a와 b의 최대 공약수를 구한다 -> 최대 공약수로 b를 나눈다 -> 분모의 소인수가 2,5만 존재? -> return 1 or 2
    
    for(let i = 1; i <=b; i++){
        if((a%i===0) && (b%i===0)){
            g = i;
        }
    }
    
    b= b/g;
    while(b%2===0){
        b = b/2
    }
    while(b%5===0){
        b = b/5
    }
    answer = b === 1 ? 1 :2
    return answer;
}