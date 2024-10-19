function solution(my_string, target) {
    var answer = 0;
    
    // includes 메서드를 활용해 값을 반환한다.
    
    answer = my_string.includes(target) ? 1 : 0 ;
    
    return answer;
}