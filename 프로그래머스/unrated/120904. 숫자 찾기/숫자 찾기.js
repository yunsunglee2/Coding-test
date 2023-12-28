function solution(num, k) {
    var answer = 0;
    // num을 순회하면서 k와 같은지 비교하고 
    // 만약에 k와 같다면 자리수(index+1)를 answer에 할당 

    let arr = num.toString()
    let K = k.toString()
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === K) {
            return answer = i+1
        } else if(arr[i] !== K){
            answer = -1
            console.log('불일치')
        }
    }
    
    return answer;
}