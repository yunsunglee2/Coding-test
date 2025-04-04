function solution(a, b) {
    let answer = 0;
    
    function gcf(a,b) {
    const aArray = [];
    const bArray = [];
        
    for(let i = 1; i <= a; i++) {
        if(a%i === 0) {
            aArray.push(i);    
        }
    }
        
    for(let j = 1; j <= b; j++) {
        if(b%j === 0) {
            bArray.push(j);    
        }
    }
        
    if(aArray.length === 2 && bArray.length === 2) {
        return 1;
    } else {
        const commonArray = bArray.filter(el => aArray.includes(el));
        console.log(commonArray, '--commonArray--');
        return Math.max(...commonArray);
    }
}
    // 최대 공약수를 통한 기약 분수 생성
    let temp = b/gcf(a,b)
    
    // 기약 분수를 2와 5로 나눠서
    while(temp % 2 === 0) {
        temp = temp/2;
    }
    
    while(temp%5 === 0) {
        temp = temp/5;
    }
    
    // 1이 되면 유한소수 1이 아니면 무한 소수
    answer = temp === 1 ? 1 : 2;
    
    return answer;
}