function solution(s) {
    var answer = '';
    const middleIndex = Math.floor(s.length/2);
    
    // 홀수
    if (s.length%2 === 1) {
        answer = s[middleIndex];
        
    // 짝수
    } else {
        // slice를 통해 answer 반환
        answer = s.slice(middleIndex-1, middleIndex+1);
    }
    return answer;
}