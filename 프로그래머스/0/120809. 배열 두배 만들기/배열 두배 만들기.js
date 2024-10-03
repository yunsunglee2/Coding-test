function solution(numbers) {
    var answer = [];
    
    // 정수 집합 배열 numbers, 각 요소 두배가진 배열 반환하기 
    // 배열을 순회하면서 2배로 만들어주기 
    // forEach -> undefined 반환, 단순 반복문 
    // map -> 조건의 매겨변수로 받고 새로운 배열 반환 
    
    answer = numbers.map((el)=> el*2 )
    
    return answer;
}