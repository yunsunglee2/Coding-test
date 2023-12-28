function solution(n) {
    var answer = 0;
    let numToStr = n.toString().split('')
    answer = numToStr.reduce((acc,cur)=> +acc + +cur,0)
    return answer;
}