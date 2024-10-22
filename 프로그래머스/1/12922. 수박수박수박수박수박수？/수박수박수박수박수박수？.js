function solution(n) {
    var answer = '';
    const WORD = "수박";
    const str_length = WORD.length;
    
    // 반복문을 통해서 해결 
    for (let i  = 0; i < n; i++) {
        answer += WORD[i%str_length]
    }
    
    return answer;
}