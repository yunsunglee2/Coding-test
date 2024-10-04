function solution(numbers) {
    var answer = 0;
    
    // 배열을 sort로 정렬
    const sortedNums = numbers.sort((a,b)=> a - b )
    
    // 음수와 양수를 나누고 양 끝값의 곱이 더 높은 수를 반환
    const beginNum = sortedNums[0]*sortedNums[1];
    const endNum = sortedNums[sortedNums.length-2]*sortedNums[sortedNums.length-1]
    
    answer = Math.max(beginNum, endNum)
    
    return answer;
}