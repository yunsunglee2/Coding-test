function solution(box, n) {
    var answer = 0;
    answer = box.map((v)=>Math.floor(v/n)).reduce((acc,cur)=>acc * cur, 1)
    return answer;
}