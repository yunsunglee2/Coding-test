function solution(my_str, n) {
    var answer = [];
    let myArr = my_str.split('')
    while(myArr.length > 0){
        answer.push(myArr.splice(0,n).join(''))
    }
    return answer;
}