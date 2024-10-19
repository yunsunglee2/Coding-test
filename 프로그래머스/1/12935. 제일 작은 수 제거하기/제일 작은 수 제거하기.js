function solution(arr) {
    var answer = [];
    const minVal = Math.min(...arr);
    
    // Math.min()을 통해 가장 작은 수 제거
    const filteredArr = arr.filter((el) => minVal !== el)
    
    // 빈 배열 -1 push
    if(filteredArr.length === 0) {
        answer.push(-1)
        return answer
    } else {
        answer.push(...filteredArr)
    }
    
    return answer;
}