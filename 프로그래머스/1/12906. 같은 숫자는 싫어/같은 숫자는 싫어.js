    // [1] arr를 순회하면서 answer에 push 합니다.
    
    // [2] answer에  이미 arr의 요소가 같은 것이 있다면 Pop합니다.

function solution(arr) {
    var answer = [];
    
    arr.forEach((el) => {
        answer.push(el);
        const lastEl = answer[answer.length - 2];
        if(el === lastEl) {
            answer.pop(el);   
        }    
    })
    
    return answer;
}