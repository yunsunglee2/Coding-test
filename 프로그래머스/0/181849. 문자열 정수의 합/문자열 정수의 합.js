function solution(num_str) {
    // 문자열 -> 배열로 변환 
    const numArr = num_str.split('').map((el)=> Number(el))
    
    // reduce 메서드 누산기를 이용해 합을 구함 
    return numArr.reduce((acc,cur) => acc + cur )
}