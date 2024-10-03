function solution(array) {
    var answer = 0;
    
    // 중앙값, 순서대로 정렬, 가운데에 위치하는 값 
    // 정렬 -> sort (원본배열 변경)
    const sortedArray = array.sort((a,b) => a - b)
    // 제한사항: 홀수 길이
    // 배열의 가운데 인덱스 구하기
    const centerIndex = Math.floor(array.length/ 2)
    
    answer = sortedArray[centerIndex]
    
    return answer;
}