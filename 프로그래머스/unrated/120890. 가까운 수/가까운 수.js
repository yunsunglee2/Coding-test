function solution(array, n) {
    var answer = 0;
    let abs = [];
    // 배열을 순회하며 n과 차의 절대값을 구하고 
    // abs 배열에 push 
    // abs 배열에서 sort로 정렬해서 인덱스 0 번째 요소와 같은 array 요소를 찾기 
    
    array.forEach((el)=>{
        abs.push(Math.abs(el-n))
    })
    const min = Math.min(...abs)
    
    let check = [];
    
    abs.forEach((el,i)=> {
        if(el===min){
            check.push(array[i])
        }
    })
    
    answer = Math.min(...check)
    
    return answer;
}

// -1, 1 n = 0
