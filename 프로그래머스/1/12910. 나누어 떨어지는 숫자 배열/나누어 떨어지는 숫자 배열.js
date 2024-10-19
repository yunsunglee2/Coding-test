function solution(arr, divisor) {
    var answer = [];
    
    // 나눠지는 값 분류
    const dividedArr = arr.filter((el) => el%divisor===0)
    
    // 요소가 하나도 없다면 -1 반환
    if(dividedArr.length === 0) {
     answer.push(-1);
        return answer;
    }
    
    // 오름차순 정렬
    answer = dividedArr.sort((a,b) => a-b)
    
    return answer;
}