function solution(my_string) {
    var answer = '';
    // 생각보다 단순할듯
    // 이중 반복문으로 검사하고자 하는 el을 배열에 넣고 
    // 문자열 순회 
    let arr = my_string.split('')
    let detected = [];
    
    for(let i = 0; i < arr.length; i++){
        detected.push(arr[i])
        for(let j = 0; j < detected.length; j++){
            if(arr[i+1] === detected[j]){
                arr[i+1] = '';
            }
        }
    }
    
    answer = arr.join('');
    
    return answer;
}