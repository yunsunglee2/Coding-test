function solution(answers) {
    const scores = [];
    const answer = [];
    const patterns = [[1,2,3,4,5],[2, 1, 2, 3, 2, 4, 2, 5],[3,3,1,1,2,2,4,4,5,5]];
    
    patterns.forEach((pattern) => {
        let score = 0;
        answers.forEach((answer,i) => {
            answer === pattern[i%pattern.length] && score++;
        })
        scores.push(score);
    })
    const MAX_SCORE = Math.max(...scores);
    // 점수가 같은 경우 처리 
    scores.forEach((score,i) => {
        score === MAX_SCORE && answer.push(i+1)
    })
    console.log(answer)
    return answer;
}