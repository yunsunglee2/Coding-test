function solution(polynomial) {
    var answer = '';
    let coEfficientOfX = 0;
    let interger = 0;
    
    // 1. + 를 기준으로 요소 나눔 
    const splitedPolynomial = polynomial.split('+');
    
    // 2. 요소를 나눈 배열을 순회하면서 x 계수 합, 정수 합 구하기
    splitedPolynomial.forEach((el_1) => {
        // 필터 메서드를 통한 공백 제거 (trim으로도 사용가능)
        const splitedEl = el_1.split('').filter(el => el !== ' ');
        
        const hasX = splitedEl.includes('x');
        
        if (hasX) {
            if(splitedEl.length > 1) {
                // 두 자리 이상이면? (x를 공백으로 교체 가능)
                const xIndex = splitedEl.indexOf('x');
                const slicedArr = splitedEl.slice(0, xIndex)
                coEfficientOfX += Number(slicedArr.join(''));    
            } else {
                coEfficientOfX += 1;
            }
            
        } else {
            // 두 자리 이상이면??
            interger += Number(splitedEl.join(''));
        }
    })
    
    // 3. x계수 answer에 push 후에 정수도 push 
    if (coEfficientOfX > 0) {
        // Handle 'x' terms
        answer += coEfficientOfX === 1 ? 'x' : `${coEfficientOfX}x`;
    }
    
    if (interger > 0) {
        // Add '+' only if there's already an 'x' term
        if (answer) answer += ' + ';
        answer += interger;
    }
    
    return answer;
}

console.log(solution("5x + 0"))