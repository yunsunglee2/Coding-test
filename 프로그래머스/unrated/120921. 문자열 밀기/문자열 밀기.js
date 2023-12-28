function solution(A, B) {
    var answer = 0;
     let word = [...A]
    for (let i = 0; i < word.length; i++){
        if(word.join('') === B){
            return answer = i
        }
        let endLiteral= word.splice(word.length-1,word.length).join('');
        word.unshift(endLiteral) ;
    }
    return answer = -1
}