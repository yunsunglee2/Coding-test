function solution(array, n) {
    var answer = 0;
    
    // 정수 집합 배열 array, 정수 n 
    // array에 n이 몇개 있는지 찾아라 
    // includes -> 요소를 매개변수로 받고 부울린 값 반환 
    // find -> 조건을 매개변수로 받고 부울린 값 반환 
    // filter를 통한 새로운 배열을 반환 받은 뒤 길이를 구해 반환
    const filteredArray = array.filter((el)=> el === n)
    answer = filteredArray.length
    
    return answer;
}