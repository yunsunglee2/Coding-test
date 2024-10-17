function solution(arr) {
    var answer = '';
    
    // 주어진 배열을 반복문으로 순회하며 answer 변수에 + 해준다.
    arr.forEach((el) => {
        answer += el;
    })
    
    return answer;
}