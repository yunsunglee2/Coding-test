function solution(balls, share) {
    var answer = 0;
    let ball = 1;
    let temp = 1;
     for(let i = 0; i < share; i++){
         ball = ball * (balls-i)
     }
     for(let j = share; j > 0; j--){
         temp = temp * j
         
     }
    
    
    answer = ball / temp
         
    return answer;
}