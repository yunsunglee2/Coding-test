function solution(n, t) {
    var answer = 0;
    
    // 1시간 -> 두배 증식, 세균 n 마리 , 시간 t 
    
    // t 시간 후, 세균은? 
    // 1시간 2n
    // 2시간 4n 
    // 3시간 8n
    
    answer = n*2**t
    
    return answer;
}