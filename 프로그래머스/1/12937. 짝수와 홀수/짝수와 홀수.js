function solution(num) {
    var answer = '';
    
    // 2로 나눠서 나머지 0 이면 짝수 
    num % 2 === 0 ? answer = 'Even' : answer = 'Odd';
    
    return answer;
}