function solution(s){
    var answer = true;
    let count_p = 0;
    let count_y = 0;
    const charArray = s.split('');
    
    // 문자열을 순회하며 count 변수를 통해 비교
    charArray.forEach((char) => {
        if( char === 'p' || char === 'P') {
            count_p += 1;   
        } else if ( char === 'y' || char === 'Y') {
            count_y += 1;   
        } 
    })
    
    count_p === count_y ? answer = true : answer = false;

    return answer;
}