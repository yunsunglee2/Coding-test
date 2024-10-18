function solution(x) {
    var answer = true;
    let combi = 0;
    
    // 숫자 -> 문자열로 반환 -> split -> 요소의 합 구함 -> x로 나눠서 부울린값 반환
    const splitedNumber = String(x).split('')
    splitedNumber.forEach((el) => {
        combi += Number(el)
    })
    
    answer = x % combi === 0 ? true : false;
    
    return answer;
}