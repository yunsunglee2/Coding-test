function solution(num) {
    var answer = 0;
    
    if(num === 1) {
        return 0;
    }
    
    // 반복문을 통해서 반복할때마다 answer에 +1
    for(let i = 1; i <= 500; i++) {
        if(num !== 1) {
            if (num % 2 === 0) {
                num = num / 2;
            } else {
                num = num*3 + 1;
            }            
        } else {
            return answer;
        }
        answer += 1
    }
    // answer 가 500이 되면 -1 반환
    if (answer === 500) {
        return -1;
    }
}