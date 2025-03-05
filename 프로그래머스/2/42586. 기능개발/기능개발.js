function solution(progresses, speeds) {
    var answer = [];
    let count = 0;
    
    // 남은 진척도
    const restProgresses = progresses.map(progress => 100 - progress);
    // 남은 날짜
    const restDays = restProgresses.map((progress,i) => Math.ceil(progress/speeds[i]))
    let maxDay = restDays[0];
    
    // days를 순회하면서 마감 기한보다 작다면 count ++ (배포할 기능 추가)
    restDays.forEach(day => {
        if (day <= maxDay) {
            count++;
        } else {
            answer.push(count);
            count = 1;
            maxDay = day;
        }
    })
    answer.push(count);
    return answer;
}