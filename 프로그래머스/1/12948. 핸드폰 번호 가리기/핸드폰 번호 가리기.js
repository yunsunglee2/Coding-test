function solution(phone_number) {
    var answer = '';
    
    // 뒷자리를 제외한 나머지 숫자 전부 * 으로 가린 문자열 리턴
    
    // 문자열을 순회하며 인덱스 [phone_number.length-4] ~ [phone_number.length-1] 제외 하고 * 변환
    const splitedNumber = phone_number.split('');
    const hiddenNumber = splitedNumber.map((el, i) => el = i < phone_number.length-4 ? '*' : el);
    answer = hiddenNumber.join('');
    
    return answer;
}