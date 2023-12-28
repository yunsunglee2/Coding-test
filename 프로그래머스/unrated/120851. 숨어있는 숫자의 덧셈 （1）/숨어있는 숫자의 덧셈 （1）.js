function solution(my_string) {
    var answer = 0;
    answer = my_string.split('').filter((v)=> !isNaN(v))
    answer = answer.reduce((acc,cur)=> acc + +cur,0);
    return answer;
}