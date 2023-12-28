function solution(n) {
    var answer = 0;
    // n 과 6의 최소 공배수 / 6 
    for (let i = 1; i < 10; i++){ 
        if((i * n)%6 === 0){
           return answer = i*n/6
        }
    }
    return answer;
}