function solution(n) {
    var answer = 0;
    // n의 제곱근을 구하고 제곱근의 제곱이 n 이라면 제곱근+1 제곱을 리턴 아니면 -1 
    const sqrt_n = Math.sqrt(n);
    const floor_n = Math.floor(sqrt_n);
    answer = Math.pow(floor_n,2) === n ? Math.pow(floor_n + 1,2) : -1;
    
    return answer;
}