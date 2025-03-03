function solution(array, commands) {
    var answer = [];
    // commands를 순회하면서 i~j까지의 배열을 구한다. 
    
    // k 번째 수를 answer에 push 한다.
    
    commands.forEach((command) => {
        const i = command[0];
        const j = command[1];
        const k = command[2];
        // i,j 번째 숫자를 모두 포함한다.
        // slice는 첫 번째 인자 포함, 두 번째 인자 미포함이다.
        // [0,0,0,0] 1~3
        const slicedArray = array.slice(i-1,j);
        const sortedArray = slicedArray.sort((a,b) => a-b);
        answer.push(sortedArray[k-1]);
    })
    
    return answer;
}