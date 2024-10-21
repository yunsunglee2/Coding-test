function solution(a, b) {
    var answer = 0;
    const multiValue = a*b;
    
    // 홀짝 구분
    if(multiValue%2 !== 0) { // ab 홀수이면
        answer = Math.pow(a,2) + Math.pow(b,2);
    } else { // ab 짝수이면 
        if (a % 2 === 0 && b % 2 === 0) { // 짝짝
            
            answer = Math.abs(a-b);
        }
        if (a % 2 === 1 || b % 2 === 1) { // 홀짝
            answer = 2 * (a + b);
        } 
    }
    
    return answer;
}