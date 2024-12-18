function solution(s) {
    var answer = '';
    
    // 문자열 스플릿 
    const splitedString = s.split(' ');
    
    // 배열 순회하면서 문자 변환
    const convertedString = splitedString.map((word) => {
        const splitedWord = word.split('');
        for(let i = 0; i < splitedWord.length; i++) {
            splitedWord[i] = i % 2 === 0 ? splitedWord[i].toUpperCase() : splitedWord[i].toLowerCase()
        }
        return splitedWord.join('')
    })
    
    // 답 반환
    
    answer = convertedString.join(' ')
    
    return answer;
}