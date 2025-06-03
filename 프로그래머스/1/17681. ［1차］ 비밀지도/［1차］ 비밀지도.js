function solution(n, arr1, arr2) {
    let answer = [];
    
    // 주어진 배열 -> 2진법 해석
    for(let i = 0; i < n; i++) {
        const binaryArray1 = arr1[i].toString(2).padStart(n,'0');
        const binaryArray2 = arr2[i].toString(2).padStart(n,'0');
        
        let row = '';
        for(let j = 0; j < n; j++) {
            row += binaryArray1[j] === '1' || binaryArray2[j] === '1' ? '#' : ' ';
        }
        
        answer.push(row);
    }
    
    console.log(answer, '--answer--');
    
    return answer;
}