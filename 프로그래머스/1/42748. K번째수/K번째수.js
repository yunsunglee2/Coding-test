function solution(array, commands) {
    var answer = [];
    
    // i ~ j 자르고 정렬 , k 번쨰 수 구하기 
    
    // slice(begin, end) 번째, 인덱스 구별 주의 
    
    // commands 순회하면서 slice, sort 하고 answer에 Push
    commands.forEach((command) => {
        const i = command[0]
        const j = command[1]
        const k = command[2]
        
        const sortedArray = array.slice(i - 1,j).sort((a,b) => a - b)
        answer.push(sortedArray[k-1])
        
    })
    
    return answer;
}