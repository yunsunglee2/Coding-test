function solution(n, m) {
    const answer = [];
    const nArray = [];
    const mArray = [];
    let firstEl = 0;
    let lastEl = 0;
    
    for(let i = 1; i <= n; i++) {
        if(n%i === 0) {
            nArray.push(i)
        }    
    }
    
    for(let j = 1; j <= m; j++) {
        if(m%j === 0) {
            mArray.push(j)
        }    
    }
    
    console.log(nArray, '--nArray--');
    console.log(mArray, '--mArray--');
    
    // 최대 공약수 구하기
    const commonArray = [];
    mArray.forEach(el => {
        nArray.forEach(el_2 => {
            if(el === el_2) {
                    commonArray.push(el_2)    
            }
        })
    })
    
    console.log(commonArray, '--commonArray--');
    
    if(nArray.length === 2 && mArray.length === 2) {
        firstEl = 1;
    } else {
        firstEl = Math.max(...commonArray);
    }
    
    // 최소 공배수 구하기
    lastEl = n*m/firstEl;
    
    answer[0] = firstEl;
    answer[1] = lastEl;
    
    return answer;
}