function solution(N, stages) {
    let answer = [];
    let stageFailureArray = [];
    
    console.log(N, '---스테이지 갯수');
    console.log(stages, '--- 사용자 수');
    
    for (let i = 1; i <= N; i++) {
        const currentStage = i;
        let stageFailure = 0;
        let reachedParticipants = 0;
        let stuckParticipants = 0;
        
        for(let j = 0; j < stages.length; j++){
            if(currentStage === stages[j]) {
                stuckParticipants++;
            }
            if(currentStage <= stages[j]) {
                reachedParticipants++;
            }
        };
        
        if(reachedParticipants > 0) {
        stageFailure = stuckParticipants/reachedParticipants;
        }
        
        stageFailureArray.push({stage: currentStage, failure: stageFailure })
        
    }
    
    stageFailureArray.sort((a,b) => {
        const currentFailure = a.failure;
        const nextFailure = b.failure;
        
        if(currentFailure === nextFailure) {
            return a.stage - b.stage
        }
        
        return b.failure - a.failure;
    })
    
    console.log(stageFailureArray)
    
    for (let i = 0; i< stageFailureArray.length; i++) {
        answer.push(stageFailureArray[i].stage);
    }
    
    
    return answer;
}