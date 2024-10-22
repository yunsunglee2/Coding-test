function solution(left, right) {
    var answer = 0;
    
    // 반복문을 통해서 해결 
    for(let i = left; i <= right; i++) {
        // 약수집합 생성
        const divisor = [];
        for (let j = 1; j <= i; j++) {
            if(i%j === 0) divisor.push(j);
        }
        // 약수 개수 확인
        answer = divisor.length%2 === 0 ? answer+i : answer-i;
    }
    
    return answer;
}