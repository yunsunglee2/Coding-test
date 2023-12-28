function solution(emergency) {
    var answer = [];
    let sortedEmergency = [...emergency].sort((a,b)=>b-a);
    console.log(sortedEmergency)
    //정렬된 배열의 인덱스+1 값이 요소의 순서 
    emergency.forEach((el_1)=>{
        sortedEmergency.forEach((el_2,i)=>{
            if(el_1 === el_2) {
                answer.push(i+1)
            }
        })
    })
    return answer;
}