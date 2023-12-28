function solution(n) {
    var answer = 0;
     answer = (n % Math.sqrt(n)) === 0 ? 1 : 2;
    return answer;
}