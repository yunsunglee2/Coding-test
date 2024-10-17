function solution(a, b) {
    
    // 첫번째 값 구하기(숫자 -> 문자열 -> 문자열 연결 연산자 -> 숫자)
    const strToNum = String(a) + String(b);
    const numToStr = Number(strToNum);
    
    // 두번째 값 구하기
    const secondStrToNum = String(b) + String(a);
    const secondNumToStr = Number(secondStrToNum);
    
    // Math.max() 함수를 통해 반환하기
    return Math.max(numToStr,secondNumToStr)
}