function solution(i, j, k) {
    var answer = 0;
    let num = [];
    for (let l = i; l <= j; l++){
        num.push(l)
    }
    for(let i = 0; i < num.length; i++){
        let test = num[i].toString().split('');
        for(let j = 0 ; j < test.length; j++){
            +test[j] === k ? answer++ : answer += 0
        }
    }
    
    
    return answer;
}