function solution(n) {
    var answer = [];
    
    // split으로 주어진 숫자 배열화
    const spiltedArray = String(n).split('');
    
    // 배열을 for로 순회하며 뒤에 부터 answer 배열에 push
    for(let i = spiltedArray.length-1; i >= 0; i--) {
        answer.push(Number(spiltedArray[i]))
    }
    
    // 배열메서드 reverse 사용하기
    // const reversedArray = spiltedArray.reverse().map((el) => +el)
    // console.log(reversedArray)
    
    return answer;
}