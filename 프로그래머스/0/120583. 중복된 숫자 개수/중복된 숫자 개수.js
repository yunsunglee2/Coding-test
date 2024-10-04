function solution(array, n) {
    var answer = 0;
    
    //배열을 순회하면서 el === n 이면은 answer 카운트를 더해서 반환한다. 
    array.forEach((el)=> {
        el === n ? answer += 1 : answer += 0
    })
    
    return answer;
}