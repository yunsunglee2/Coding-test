function solution(numbers) {
    var answer = 0;
    // 객체로 명단 생성
    const numberList = {};

    // 0-9까지 객체 키 등록
    for(let i = 0; i < 10; i++) {
        numberList[i] = 0
    }
    
    // numbers 순회하며 numberList에 +1
    numbers.forEach((number) => {
        numberList[number] = numberList[number] + 1
    })
    
    console.log(numberList)
    
    // 0 인 키 조회
    for(const number in numberList){
        if(numberList[number] === 0) {
            answer = answer + Number(number);
        }
    }
    return answer;
}