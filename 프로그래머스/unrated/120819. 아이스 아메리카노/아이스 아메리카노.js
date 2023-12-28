function solution(money) {
    var answer = [];
    const americano = 5500
    answer.push(Math.floor(money/americano), money%americano);
    return answer;
}