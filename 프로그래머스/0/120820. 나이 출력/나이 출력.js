function solution(age) {
    var answer = 0;
    
    // 2022년 기준
    const YEAR = 2022;
    
    // 출생 년도 구하기 (age = YEAR - 출생 년도 + 1)
    answer = YEAR - age + 1
    
    return answer;
}