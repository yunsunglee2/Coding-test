function solution(str1, str2) {
    var answer = 0;
    
    // includes를 통한 문자열 래퍼객체 생성 후 부울린값 반환 
    answer = str2.includes(str1) ? 1 : 0 ;
    
    return answer;
}