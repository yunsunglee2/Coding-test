function solution(n) {
    // 2진수 변환 -> 배열 변환 -> 1 필터 -> 갯수 반환
    const countOfOne = (n) => n.toString(2).split('').filter(el => el === '1' ).length;
    let nextNumber = n+1;
    const target = countOfOne(n);
    
    while(target !== countOfOne(nextNumber) ) {
        // 다음 숫자 2진수 변환 했는데 1이 많으면 반복
        nextNumber++;
    }
    
    return nextNumber;
}