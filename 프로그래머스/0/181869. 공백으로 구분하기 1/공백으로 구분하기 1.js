function solution(my_string) {
    var answer = [];
    
    const splitedArr = my_string.split(' ')
    answer.push(...splitedArr)
    
    return answer;
}