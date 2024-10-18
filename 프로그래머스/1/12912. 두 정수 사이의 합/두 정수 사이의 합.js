function solution(a, b) {
    var answer = 0;
    const larger = Math.max(a,b);
    const smaller = Math.min(a,b);
    
    // for 반복문으로 순회하면서 answer에 + 해줌
    for(let i = smaller ; i <= larger ; i ++) {
        answer += i
    }
    
    return answer;
}