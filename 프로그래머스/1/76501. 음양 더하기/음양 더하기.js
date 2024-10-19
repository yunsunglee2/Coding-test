function solution(absolutes, signs) {
    var answer = 123456789;
    
    // abs배열을 map으로 순회하면서 signs 배열과 매핑해 새로운 배열 반환
    const signedArr = absolutes.map((el, i) => 
        el = signs[i] ? el*1 : el*-1
    )
    
    answer = signedArr.reduce((acc,cur) => acc + cur, 0)
    
    return answer;
}