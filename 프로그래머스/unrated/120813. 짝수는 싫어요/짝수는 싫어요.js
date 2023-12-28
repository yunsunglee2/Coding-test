function solution(n) {
    var answer = [];
    let numbers = [];
    for(let i = 1; i <= 100; i++) {
        if (i <= n ){
            numbers.push(i)
        }
    }
    answer = numbers.filter((v)=> v%2 === 1)
    return answer;
}