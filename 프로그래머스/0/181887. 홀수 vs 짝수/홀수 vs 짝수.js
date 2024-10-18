function solution(num_list) {
    var answer = 0;
    const combiObject = {
        even: 0,
        odd: 0
    }
    
    num_list.forEach((num,i) => {
        if(i % 2 === 0) {
            // 짝수 번째 원소들의 합
            combiObject['even'] += num;
        } else {
            // 홀수 번째 원소들의 합 
            combiObject['odd'] += num;
        }
    })
    // Math.max()를 통한 비교 후 큰 값 리턴 or 같은 경우 그 값 리턴
    answer = Math.max(combiObject['even'], combiObject['odd'])
    
    return answer;
}