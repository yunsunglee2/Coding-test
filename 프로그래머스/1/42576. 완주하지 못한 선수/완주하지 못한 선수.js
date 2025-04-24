function solution(participant, completion) {
    var answer = '';
    const table = {};
    
    // 참가자 표 생성
    participant.forEach(person => {
        if(table[person]) {
            table[person] +=1;
        } else {
            table[person] = 1;
        }
    })
    
    // 완주한 사람 확인
    completion.forEach(completedPerson => {
        table[completedPerson] -= 1;
    })
    
    // 완주 못한 사람 찾기
    for(const retired in table) {
        if(table[retired] === 1) {
            answer = retired;
        }
    }
    
    return answer;
}