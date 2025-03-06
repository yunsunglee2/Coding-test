function solution(A,B){
    var answer = 0;

    // 최솟값 -> 가장 작은 값 * 가장 큰 값
    
    // A 배열 오름차순 정렬, B 배열 내림차순 정렬
    const sortedA = A.sort((a,b) => a-b);
    const sortedB = B.sort((c,d) => d-c);
    
    sortedA.forEach((el,i) => {
        const result = el * sortedB[i];
        answer += result;
    })
    
    // 순회하면서 answer에 값 더하기

    return answer;
}