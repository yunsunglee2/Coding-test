function solution(price) {
    var answer = 0;
    let k = 1000;
    let FIRST_LEVEL_SALE = 0.95 ;
    let SECOND_LEVEL_SALE = 0.9 ;
    let THIRD_LEVEL_SALE = 0.8 ;
    if( 100*k <= price && price < 300*k) {
        answer = Math.floor(price * FIRST_LEVEL_SALE) ;
        console.log(answer);
    } else if (300*k <= price && price < 500*k) {
        answer = Math.floor(price * SECOND_LEVEL_SALE) ;
    } else if (500*k <= price) {
        answer = Math.floor(price * THIRD_LEVEL_SALE) ;
    } else {
        answer = price;
    }
    
    return answer;
}