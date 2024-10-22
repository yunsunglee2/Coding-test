function solution(a, b) {
    var answer = 1234567890;
    
    // a, b 두 배열을 순회하면서 곱한 값을 요소로 리턴하는 배열을 생성 
    const multi_arr = a.map((el, i) => el = el*b[i]);
    
    // 위의 배열의 누산기를 통해서 내적을 추출
    answer = multi_arr.reduce((acc, cur) => acc + cur, 0);
    
    
    return answer;
}