function solution(n, lost, reserve) {
    let answer = 0;
    const uniformTable = {};
    let realReserve = reserve.filter(r => !lost.includes(r));
    let realLost = lost.filter(l => !reserve.includes(l));
    realReserve.sort((a,b) => a-b);
    realLost.sort((a,b) => a-b);
    
    // 체육복 유무 테이블을 생성한다.
    for(let i = 1; i <= n; i ++) {
        uniformTable[i] = true;
    }
    
    // lost 배열을 순회하면서 lost 요소 번호 +-1 값이 realReserve에 없다면 체육복 false로 변경한다.
    realLost.forEach(lostEl => {
        const hasPrev = realReserve.includes(lostEl-1);
        const hasNext = realReserve.includes(lostEl+1);
        if(hasPrev) {
            realReserve = realReserve.filter(realReserveEl => realReserveEl !== lostEl-1);
        } else if(hasNext) {
            realReserve = realReserve.filter(realReserveEl => realReserveEl !== lostEl+1);
        } 
        if(!hasPrev && !hasNext) {
            uniformTable[lostEl] = false;
        }
    })
    
    // 객체를 순회하며 false를 발견하면 answer++
    for (const uniform in uniformTable) {
        if (uniformTable[uniform]) {
            answer++;
        }
    }
    
    return answer;
}