function solution(s) {
    var answer = true;
    // 문자열 길이
    if(s.length === 4 || s.length === 6) {
        const splitedString = s.split('');
        splitedString.forEach((el) => {
            if(isNaN(el)) {
                answer = false;
            }
        })
    } else {
        answer = false;
    }

    return answer;
}