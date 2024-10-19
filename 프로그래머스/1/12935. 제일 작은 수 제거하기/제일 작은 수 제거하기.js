function solution(arr) {
    var answer = [];
    
    // Math.min()을 통해 가장 작은 수 제거
    const filteredArr = arr.filter((el) => Math.min(...arr) !== el)
    
    // 빈 배열 -1 push
    if(filteredArr.length === 0) {
        answer.push(-1)
        return answer
    } else {
        answer.push(...filteredArr)
    }
    
    return answer;
}