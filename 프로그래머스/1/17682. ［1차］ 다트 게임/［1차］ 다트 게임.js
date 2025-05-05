function solution(dartResult) {
    var answer = 0;
    const dartArray = dartResult.split('');
    let stack = [];
    const scoreList = [];
    
    while(dartArray.length) {
        const result = dartArray.shift();
        
        if(result === 'S') {
            const joinedNumber = Number(stack.join(''));
            scoreList.push(Number(joinedNumber));
            stack = [];
            continue;
        }
        if(result === 'D') {
            const joinedNumber = Number(stack.join(''));
            scoreList.push(Math.pow(joinedNumber,2));
            stack = [];
            continue;
        }
        if(result === 'T') {
            const joinedNumber = Number(stack.join(''));
            scoreList.push(Math.pow(joinedNumber,3));
            stack = [];
            continue;
        }
        
        if(result === '*') {
            for(let i = scoreList.length-1; i > scoreList.length-3; i--){
                if(i >= 0) {
                    scoreList[i] = 2 * scoreList[i];    
                }
            }
            continue;
        }
        if(result === '#') {
            scoreList[scoreList.length - 1] = -1 * scoreList[scoreList.length - 1];
            continue;
        }
        
        stack.push(result);
    }
    
    
    scoreList.forEach(score => {
        answer += Number(score);
    })
    
    return answer;
}