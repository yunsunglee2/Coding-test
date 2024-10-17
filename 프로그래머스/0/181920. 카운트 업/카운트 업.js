function solution(start_num, end_num) {
    var answer = [];
    
    // for 반복문으로 start_num 부터 end_num 까지 순회하며 answer에 push
    for(let i = start_num; i <= end_num; i++) {
        answer.push(i);
    }
    
    return answer;
}