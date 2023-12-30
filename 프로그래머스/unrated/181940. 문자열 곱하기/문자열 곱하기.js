function solution(my_string, k) {
    var answer = [];
    let newString = [...my_string];
    let i = 0;
    while(i < k){
        newString.forEach((el)=>{
            answer.push(el)
        })
        i++;
    }
    answer = answer.join('');
    return answer;
}