function solution(arr, query) {
    var answer = [];
    
    query.forEach((el, i) => {
        if(i%2 === 0) {
            // 짝수 인덱스
            // slice 메서드는 원본 배열을 변형하지 않습니다.
            arr = arr.slice(0, el+1)
        } else {
            // 홀수 인덱스 
            arr = arr.slice(el, arr.length)
        }
    })
    answer.push(...arr)
    
    return answer;
}