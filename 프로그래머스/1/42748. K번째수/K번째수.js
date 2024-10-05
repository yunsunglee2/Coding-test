function solution(array, commands) {
    var answer = [];
    
    // slice(begin, end) end 미포함, 인덱스, 길이 주의
    commands.forEach((command) => {
        const i = command[0];
        const j = command[1];
        const k = command[2];
    // i 번째 ~ j 번쨰 자르고 sort    
        const sortedArray = array.slice(i-1,j).sort((a,b) => a-b);
    // k 번째 수 구하기 (인덱스 주의)
        answer.push(sortedArray[k-1]);
    })
    
    
    
    
    
    
    return answer;
}