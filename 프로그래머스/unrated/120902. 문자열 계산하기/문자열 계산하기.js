function solution(my_string) {
    var answer = 0;
    let newArr = my_string.split(' ')
    let ans = +newArr[0]
    newArr.forEach((el,i)=>{
        if(el === '+') {
            ans+= +newArr[i+1]
        } else if (el === '-') {
            ans-= +newArr[i+1]
        } 
        answer = ans
    })
    return answer;
}