function solution(s) {
    var answer = 0;
    let sArray = s.split(' ')
    console.log(sArray);
    sArray.forEach((el,i)=> {
        if(el === 'Z'){
            answer-=sArray[i-1]
        } else {
            answer+= +el
        }
    })
    
    // answer = temp.reduce((a,c)=>+a + +c,0)
    return answer
}