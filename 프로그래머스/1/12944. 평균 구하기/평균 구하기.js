function solution(arr) {
    
    // 배열 길이 구하기 
    const arrLength = arr.length
    
    // 요소 합 구하기
    const combi = arr.reduce((acc, cur) => acc + cur, 0)
    
    // 평균 리턴 
    return combi/arrLength
}