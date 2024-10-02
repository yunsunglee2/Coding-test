function solution(n) {
    var answer = 0;
    const target = n - 1;
    
    for(let x = 2; x <= target; x++) {
        if (target % x === 0) {
            answer = x
            return answer;
        }
    }
}