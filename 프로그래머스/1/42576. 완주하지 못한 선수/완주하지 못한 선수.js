function solution(participant, completion) {
    var answer = '';
    // 이름-인원수 표 만들기
    const participants = {};
    
    participant.forEach(participant_el => {
        if(participants[participant_el] > 0) {
            participants[participant_el]++;    
        } else {
            participants[participant_el] = 1;    
        }
    })
    
    completion.forEach(completion_el => {
        if(participants[completion_el] > 0) {
            participants[completion_el]--; 
        }
    })
    
    for(const participantPerson in participants) {
        if(participants[participantPerson] > 0) {
            answer = participantPerson;
        }
    }
    
    return answer;
}