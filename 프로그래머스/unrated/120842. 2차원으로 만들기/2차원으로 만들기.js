function solution(num_list, n) {
    var answer = [];
    // num_list 를 slice해서 
    // answer에 push 
    let arr = num_list.map((v)=>v)
    for(let i = arr.length; i > 0; i-=n){
        answer.push(arr.splice(0,n))
    }
    return answer
}