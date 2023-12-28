function solution(my_string) {
    var answer = [];
    answer = my_string.split('').filter((v)=> v >= 0).map((v)=>+v).sort((a,b) => a-b)
    
    return answer;
}