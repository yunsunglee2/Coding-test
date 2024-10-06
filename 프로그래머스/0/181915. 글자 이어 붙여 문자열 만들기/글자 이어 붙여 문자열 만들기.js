function solution(my_string, index_list) {
    var answer = '';
        
    // 정수 배열 순회하면서  my_string[i] 문자열 연결 연산자에 answer = answer + my_string[i]
    index_list.forEach((index) => {
        answer = answer + my_string[index];
    })
    
    
    return answer;
}