function solution(sides) {
    var answer = 0;
    const [a,b,longest] = sides.sort((a,b)=> a-b);
    answer = longest < a + b ? 1 : 2
    return answer;
}