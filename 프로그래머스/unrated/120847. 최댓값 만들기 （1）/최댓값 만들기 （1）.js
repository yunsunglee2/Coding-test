function solution(numbers) {
    var answer = 0;
    // numbers의 배열을 오름차순으로 정렬
    // numbers[numbers.length-1]*numbers[numbers.length-2]을 구한다.
    
    numbers.sort((a,b)=> a-b);
    answer = numbers[numbers.length-1]*numbers[numbers.length-2]

    return answer;
}