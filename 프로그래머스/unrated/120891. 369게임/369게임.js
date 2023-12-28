function solution(order) {
    var answer = 0;
    // 36 -> '3', '6' 나누고 
    // forEach 하고 문자열 -> 숫자로 전환 -> return   / 3 
    function three(el) {
        if(el%3===0 && el !== 0){
            answer++;
        }
    }
    String(order).split('').map((v)=>+v).forEach(three)
    return answer;
}