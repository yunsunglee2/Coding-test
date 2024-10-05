function solution(num_list) {
    var answer = [0,0];
    
    // 배열 순회하며 (단순반복)
    num_list.forEach((num) => {
        if(num % 2 === 0) {
            answer[0] += 1
        } else {
            answer[1] += 1
        }
    })
    
    return answer;
}