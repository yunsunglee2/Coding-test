function solution(n_str) {
    var answer = '';
    
    // n_str split 해서 첫 요소가 0이면 순회해서 shift하기 
    
    const splitedStr = n_str.split('')
    
    while(splitedStr[0] === '0') {
         splitedStr.shift();
    }
    
    console.log(splitedStr);
    
    answer += splitedStr.join('');
    
    return answer;
}