function solution(s) {
    
     // 문자열을 공백 기준으로 나누어 숫자 배열 생성
    let numberArray = s.split(' ').map((el)=> Number(el))
    console.log(numberArray)
    
     // 최소값과 최대값 계산
    const maxNum = Math.max(...numberArray)
    const minNUm = Math.min(...numberArray)
    
     // "(최소값) (최대값)" 형태의 문자열 반환
    return `${minNUm} ${maxNum}`;
}