function solution(my_string) {
    var answer = [];
    
    // split 메서드 활용 
    const splitedStr = my_string.split(' ');
    
    splitedStr.forEach((word) => {
        if(word.length) {
            answer.push(word)
        }
    })
    
    
    
    
    return answer;
}