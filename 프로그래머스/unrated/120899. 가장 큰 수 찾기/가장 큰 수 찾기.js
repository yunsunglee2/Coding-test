function solution(array) {
    var answer = [];
    let temp = [...array].sort((a,b)=> a-b);
    array.forEach((el,i)=> {
        if(el === temp[temp.length-1]){
            answer.push(el, i)
        }
        
         
    })
    
    return answer;
}