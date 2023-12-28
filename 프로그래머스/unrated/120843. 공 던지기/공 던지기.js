function solution(numbers, k) {
    var answer = 0;
    answer = numbers[(k-1)*2%numbers.length]
    return answer;
}