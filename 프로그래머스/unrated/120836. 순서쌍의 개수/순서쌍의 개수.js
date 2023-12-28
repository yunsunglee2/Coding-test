function solution(n) {
    var answer = 0;
    let a=[];
    for (let A = 1; A <= n; A++){
             if(n%A === 0){
                 a.push(A);
             }
    }
    answer = a.length;
    
    return answer;
}