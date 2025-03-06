function solution(s) {
    var answer = '';
    
    // split - 배열 생성
    const splitedS = s.split(' ');

    // 요소 첫 글자 알파벳 -> 대문자로 변경
    splitedS.forEach((word, i) => {
        if (word) { // 공백이 아닌 경우만 처리
            splitedS[i] = word[0].toUpperCase() + word.slice(1).toLowerCase();
        }
    });

    answer = splitedS.join(' '); // 원래 공백 유지
    return answer;
}
