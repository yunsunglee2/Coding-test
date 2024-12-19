function solution(n, m) {
    var answer = [];
    const n_최대공약수_리스트 = [];
    const m_최대공약수_리스트 = [];
    
    // 배열 맨앞에 최대공약수, 그 다음에 최소공배수 
    
    // ex) 12, 4
    // 약수 구하기
    // 12 - 1,2,3,4,6,12
    // 4  - 1,2,4
    
    // 두 개의 약수 리스트 중에서 가장 큰 약수 => 최대 공약수
    for(let i = 1; i <= n; i++) {
        const 나머지 = n%i;
        if(나머지 === 0) {
            n_최대공약수_리스트.push(i);
        }
    }
    
        for(let j = 1; j <= m; j++) {
        const 나머지 = m%j;
        if(나머지 === 0) {
            m_최대공약수_리스트.push(j);
        }
    }
    console.log(n_최대공약수_리스트)
    console.log(m_최대공약수_리스트)
    
    // 공통 약수 리스트에서 가장 큰수 
    const 공통약수 = n_최대공약수_리스트.filter(value => m_최대공약수_리스트.includes(value))
    
    const 최대공약수 = Math.max(...공통약수);


    // 최소공배수는 두수의 곱을 최대공약수로 나눈 값  
    const 최소공배수 = n*m/최대공약수;
    
    answer.push(최대공약수, 최소공배수)
    
    return answer;
}