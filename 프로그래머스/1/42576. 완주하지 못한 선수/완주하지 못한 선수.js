function solution(participant, completion) {
    var answer = '';
    // 참가 배열, 완주 배열
    // participant = completion + 1
    // 선수? 참여? -> 사람? -> 명단? -> 해시
    
    // 객체로 명단 생성 (키: 이름, 벨류: 명수)
    const participantList = {};
    
    // 참가자 배열을 순회하며 명단 객체에 키, 벨류 추가하기 (단순반복-> 반복문)
    participant.forEach((name) => {
        participantList[name] = (participantList[name] || 0) + 1
    })
    
    // 완주가 명단 순회하며 명단 객체에 이름이 있다면 +1
    completion.forEach((com_name) => {
        participantList[com_name] = participantList[com_name] - 1
    })
    
    // 객체 명단을 순회하며 값이 0 보다 키 찾아 answer로 반환
    for(const person in participantList) {
        if(participantList[person] > 0) return person;
    }
    
    return answer;
}