function solution(array, commands) {
    var answer = [];
    // commands를 순회하면서 array를 자르고 정렬
    commands.forEach(command => {
        const i = command[0];
        const j = command[1];
        const k = command[2];
        
        const slicedArray = array.slice(i-1,j);
        const sortedArray = slicedArray.sort((a,b) => a-b);
        
        answer.push(sortedArray[k-1]);
    })
    
    // 반환한 배열을 k번째 수를 answer에 push 
    return answer;
}