function solution(n) {
    var answer = [];
    // 약수 구하기 
    // ex) 1, 2, 3, 4, 6, 8, 12, 24
    for (let i = 1; i <= n; i++){
        if( n%i === 0){
            answer.push(Math.floor(n/i))
        }
    }
    answer.sort((a,b)=> a-b)
    return answer;
}