function solution(n, lost, reserve) {
    var answer = 0;
    const uniforms = {};
    let realReserve;
    
    for(let i = 0; i < n; i ++) {
        uniforms[i+1] = true;
    };
    
    console.log(uniforms)
    
    // reserve 배열에서 lost 번호가 존재하면 filter 처리
    lost.forEach((lostStudent) => {
        const filteredReserve = reserve.filter(reserver => reserver !==lostStudent );
        realReserve = [...filteredReserve];
        
        // 순회하면서 realReserve에 +-1 번호가 존재하지 않으면 false 처리하고 reserve 배열에서 삭제
        const filteredStudent = realReserve.filter(reserver => reserver !== lostStudent+1 ||  reserver !== lostStudent-1)
        
        console.log(filteredStudent, '--filteredStudent--')
        
        
    })
    
    // 비교한 요소는 reserve에서 제거 중복빌림 방지 
    
    return answer;
}