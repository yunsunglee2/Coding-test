function solution(arr) {
    var answer = [];
    
    // arr forEach로 순회하여 
    arr.forEach((el) => {
        for(let i = 0; i < el; i++){
            answer.push(el);
        }
    })
    
    return answer;
}