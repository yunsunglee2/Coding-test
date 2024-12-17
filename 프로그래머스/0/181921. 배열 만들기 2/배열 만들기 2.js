function solution(l, r) {
    var answer = [];
    
    // 정수 l, r 
    // l 이상 r 이하 정수 중에 숫자 0 과 5로만 이루어진 모든 정수를 오름차순 정렬 배열 반환 
    
    // l ~ r 사이 정수 구하기 -> 배열 생성하기
    for(let num=l; num<=r; num++) {
        const splitedNum = String(num).split('');
        const isValid = splitedNum.every((el) => el === '0' || el === '5')
        if(isValid) {
            answer.push(num)
        }
        
    }
    answer = answer.length ? answer : [-1]
    
    // 배열을 순회하면서 요소가 0 과 5로만 이루어져있는지 필터
    
    return answer;
}