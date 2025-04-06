// 순회하는 요소와 stack의 마지막 요소를 비교
// 순회하는 요소와 stack을 마지막 요소가 같다면 pop을 실행 -> 실행하는 이유?
// stack 배열에 순회했던 요소들을 집어 넣는다.
// 순회했던 요소와 current 요소와 비교가 가능.
function solution(s) {
    let answer = -1;
    const stack = [];
    
    for (let char of s) {
        
        if(stack[stack.length-1] === char) {
            
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    answer = stack.length === 0 ? 1 : 0 ;

    return answer;
}