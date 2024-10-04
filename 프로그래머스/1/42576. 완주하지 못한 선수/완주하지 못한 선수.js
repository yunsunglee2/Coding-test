function solution(participant, completion) {
    var answer = '';
    
    //마라톤 선수, 단 한명 제외 마라톤 완주 com - parti = - 1
    
    // 해시 맵 생성 
    const participantList = {};
    
    // partcipant를 반복문으로 순회하며 명단 생성, 카운트 + 1
    participant.forEach((name)=> {
        participantList[name] = (participantList[name] || 0) + 1
    })
    
    // completion를 반복문으로 순회하며 명단 검사, 명단에 이름 있으면 0, 아니면 그대로 1
    completion.forEach((name)=> {
        if(participantList[name]) {
            participantList[name] = participantList[name] - 1    
        }  
    })
    
    // 완주 못한 선수 카운트 1인 사람 반환
    for (const name in participantList){
        if(participantList[name] === 1) return name;
    }
    
}