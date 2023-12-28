function solution(numbers, direction) {
    var answer = [];
    // 배열 회전 시키기 
    // R
    // numbers[i] = numbers[i+1] 로 전환 
    // numbers[numbers.length-1] = numbers[0] 로 전환 
    // L
    // numbers[i] = numbers[i+1] 로 전환 
    // numbers[0] = numbers[numbers.length-1]
        if(direction === 'right'){
            let temp = [];
            for(let i = numbers.length-1; i >= 0; i--){
                if( i === numbers.length-1){
               temp.push(numbers[numbers.length-1])
                numbers[i] = numbers[i-1]
               } else if( i === 0){
                   numbers[i] = temp[0]
               } else {
                   numbers[i] = numbers[i-1]
               }
            }
        } else if ( direction === 'left'){
            let temp2 = [];
            for(let i = 0; i < numbers.length; i++){
                if ( i === 0){
                    temp2.push(numbers[i])
                    numbers[i] = numbers[i+1]
                } else if ( i === numbers.length-1){
                    numbers[i] = temp2[0]
                } else {
                    numbers[i] = numbers[i+1]
                }
            }
        }
    
    answer = numbers;
    return answer;
}