function solution(numbers) {
    var answer = 0;
    let numList = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ]
    for(let i = 0; i < numList.length; i++){
        numbers = numbers.replaceAll(numList[i],i);
    }
    answer = +numbers
    return answer;
}