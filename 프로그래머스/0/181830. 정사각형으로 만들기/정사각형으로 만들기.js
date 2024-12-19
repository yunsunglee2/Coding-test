function solution(arr) {
    var answer = [[]];
    // 행 길이
    const horizontalLength = arr.length;
    // 열 길이
    const verticalLength = arr[0].length;
    
    console.log(horizontalLength, '---행---')
    console.log(verticalLength, '---열---')
    
    answer = arr;
    const gap = horizontalLength - verticalLength;
    // 행과 열 비교 
    
    // 행이 길다면 열에 요소가 짧은 만큼 0 추가
    if (gap > 0) {
        answer.forEach((item) => {
            const add = Array(Math.abs(gap)).fill(0);
            item.push(...add);
        })
    } 
    // 열이 길다면 형 추가
    if (gap < 0){
        for(let i = 0; i < Math.abs(gap); i++) {
            const add = Array(verticalLength).fill(0);
            answer.push(add)
        }

    }
    
    return answer;
}