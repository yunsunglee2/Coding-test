function solution(array) {
    var answer = 0;
    let newArray = array.join('').split('')
    console.log(newArray)
    newArray.forEach((el)=> {
        +el === 7 ? answer+=1 : answer+=0
    })
    return answer;
}