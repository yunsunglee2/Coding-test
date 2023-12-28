function solution(n) {
    var answer = 0;
    let numbers = [];
    let i=1;
    
    while(i <= 300){
        numbers.push(i)
        i++;
    }    
    console.log(numbers);
    const samX = numbers.filter((number)=>{
        return (number%3 !== 0) && !String(number).split('').includes('3')
    })
    console.log(samX.length);
    numbers.forEach((el,i)=>{
        if (el === n) {
            samX.forEach((el2,i2)=>{
                if(i === i2){
                    answer = el2
                }  
        })    
        }
    })
    
    
    return answer;
}