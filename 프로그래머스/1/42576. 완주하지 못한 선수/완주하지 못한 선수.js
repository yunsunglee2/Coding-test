function solution(participant, completion) {
    var answer = '';
    
    // 명단 만들어서 사람 찾기 
    const participantList = {};
    
    // participant 순회하면서 participantList에 키, 벨류 생성 카운트 + 1 (중복 존재시, 그대로 유지)
    participant.forEach((name) => {
        participantList[name] = (participantList[name] || 0) + 1
    })
    
    // completion 순회하면서 participantList에 있으면 카운트 -1
    completion.forEach((name) => {
        if(participantList[name]) {
               participantList[name] = participantList[name] - 1
        }
    })
    
    // participantList에서 for...in 문 순회하면서 answer 반환
    for(const person in participantList) {
        if(participantList[person] > 0) {
            answer = person
        }
    }
    
    
    return answer;
}