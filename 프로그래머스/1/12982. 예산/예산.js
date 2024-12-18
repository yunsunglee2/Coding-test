function solution(d, budget) {
    var answer = 0;
    
    // 부서별 물품 구매 필요 금액 조사
    
    // 전체 예산이 정해져 있음
    
    // 최대한 많은 부서의 물품 구매
    
    // 예산에서 필요예산이 적은 부서빼면 최대한 많은 부서 지원 가능
    const sortedD = d.sort((a,b) => a - b)
    
    sortedD.forEach((d_budget) => {
        if(budget >= d_budget) {
            budget -= d_budget;
            answer += 1;
        }
    })
    
    console.log(answer)
    
    // 적은 금액 지원하지 않고 정확히 금액 맞춰서 지원
    
    // 최대 몇개의 부서에 물품을 지원할 수 있는지 answer 반환 
    
    return answer;
}