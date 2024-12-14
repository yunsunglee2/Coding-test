function solution(code) {
    var answer = '';
    let mode = 0;
    
    const splitedCode = code.split('');
    
    splitedCode.forEach((char, idx) => {
        if(mode === 1) {
            if (idx % 2 === 1) {
                if(char !== '1') answer += char
        }
        if (char === '1') mode = 0;
    } else {
        if (idx % 2 === 0) {
            if(char !== '1') answer += char
        }
        if (char === '1') mode = 1;        
    }
    })
    return answer === '' ? "EMPTY" : answer;
}