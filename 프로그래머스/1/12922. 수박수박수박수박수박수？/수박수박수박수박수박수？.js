function solution(n) {
    var answer = '';
    const WORD = "수박";
    
    // 반복문을 통해서 해결 
    for (let i  = 0; i < n; i++) {
        answer += WORD[i%WORD.length]
    }
    
    return answer;
}