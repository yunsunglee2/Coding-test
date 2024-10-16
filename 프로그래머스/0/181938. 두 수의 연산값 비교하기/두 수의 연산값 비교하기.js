function solution(a, b) {
    
    // 지구 연산자 구하기 (정수 -> 문자열로 변환 -> 더하기 연산자 -> 숫자열 변환)
    const numToStr = String(a) + String(b);
    const strToNum = Number(numToStr);
    
    // 비교후 반환
    return Math.max(strToNum, 2*a*b)
}