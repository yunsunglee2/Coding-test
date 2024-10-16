function solution(x, n) {
    var answer = [];
    let num = x;
    
    // n의 길이 만큼 반복해서 answer의 빈배열에 push
    for(let i = 0; i < n; i++) {
        if(i !== 0) {
            num += x;            
        }
        answer.push(num);
    }
    
    return answer;
}