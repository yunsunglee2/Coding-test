function solution(str_list, ex) {
    var answer = '';
    
    // str_list를 순회하며 answer 변수에 문자열 연결 연산자로 더해준다. 
    // 만약, 순회하면서 ef가 있으면 그 요소는 제외한다.
    str_list.forEach((str) => {
        if(!str.includes(ex)) {
            answer += str
        }
    })
    
    return answer;
}