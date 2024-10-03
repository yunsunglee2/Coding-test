function solution(array, commands) {
    var answer = [];
    
    // 정렬 문제 
    // i ~ j 자르고 정렬, k 번째 수를 구해라
    
    // i, j, k 구하기 
    // 커맨드 순회
    const NewAnswer = commands.map((item)=> {
        // 1. slice로 자르기 
        const slicedArray = [...array].slice(item[0]-1,item[1])
        // 2. sort로 오름차순 정렬 
        const sortedArray = [...slicedArray].sort((a,b)=> a- b)
        // 3. 배열의 k+1 인덱스 수 구하기
        return sortedArray[item[2]-1]
    })
    
    answer.push(...NewAnswer)
    
    return answer;
}