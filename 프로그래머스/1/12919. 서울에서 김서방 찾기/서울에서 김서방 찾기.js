function solution(seoul) {
    var answer = '';
    const target = 'Kim';
    let location = 0;
    // seoul 배열 순회하며 인덱스 찾기
    seoul.forEach((el, i) => {
        if(el === target) {
            location += i;
        }
    })
    
    answer = `김서방은 ${location}에 있다`
    
    return answer;
}