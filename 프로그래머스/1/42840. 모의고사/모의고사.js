function solution(answers) {
    var answer = [];
    const scores = [0,0,0];
    // 패턴 정의
    const patterns = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ];
    
    // answers를 순회하며 정답비교, 스코어 카운트 +1
    answers.forEach((el_1,i) => {
        patterns.forEach((el_2,j) => {
            if(el_1 === el_2[i%el_2.length]) {
                scores[j]+=1
            }
        })
    })
    
    console.log(scores);
    
    // scores를 순회하며 가장 많이 맞힌 사람 배열로 반환
    
    const maxScore = Math.max(...scores)
    
    scores.forEach((score, i) => {
        score === maxScore && answer.push(i+1)
    })
    
    return answer;
}