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