function solution(numbers) {
    var answer = 0;
    
    // 배열 원소의 평균값을 구하기 
    
    // 배열 합 구하기
    const numbersCombine = numbers.reduce((acc, cur) => acc + cur)
    
    // 배열 길이 구하기
    const numbersLength = numbers.length
    
    answer = numbersCombine / numbersLength
    
    return answer;
}