function solution(numbers) {
    var answer = 0;
    numbers.sort((a,b)=> a-b);
    console.log(numbers)
    let yangSu = numbers[numbers.length-1] * numbers[numbers.length-2];
    let eumSu = numbers[0] * numbers[1];
    answer = Math.max(yangSu,eumSu)
    return answer;
}