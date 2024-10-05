function solution(answers) {
    var answer = [];
    const scores = [0,0,0];
    
    //  패턴 
    const patterns = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    // 완전 탐색
    answers.forEach((item,i) => {
        patterns.forEach((pattern,j) => {
            const index = i%pattern.length
            if (pattern[index] === item) {
                scores[j] += 1;
            }
        })
    })
    
    // 결과 도출
    const maxScore = Math.max(...scores);
    
    scores.forEach((score, i) => {
        if(score === maxScore) {
            answer.push(i+1)
        }
    })
    return answer;
}