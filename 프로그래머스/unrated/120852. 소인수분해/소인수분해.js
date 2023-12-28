function solution(n) {
    var answer = [];
    let numList = [];
    let i = 1;
    while(i <= n){
        if(n % i === 0){
            numList.push(i)
        }
        i++
    }

    numList.forEach(function(el){
        let j = 1
        let numList2= [];
            while(j <= el){
        if(el % j === 0){
            numList2.push(j)
        }
        j++
    } 
        numList2.length === 2 ? answer.push(el) : void 0
    })
    return answer;
}