function solution(n) {
    var answer = 0;
    
    // 숫자 -> 문자열 변환 -> split -> 배열 메서드 sort 로 정렬 -> join(문자열) -> 숫자로 변환
    const splitedNumber = String(n).split('');
    const sortedNumberToString = splitedNumber.sort((a,b) => b - a).join('');
    answer = Number(sortedNumberToString);
    
    return answer;
}