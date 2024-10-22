function solution(s) {
    var answer = '';

    const splitedStr = s.split('');
    
    // isLowerCase() 메서드 활용
    const lowerCaseArr = splitedStr.map(char => char === char.toLowerCase() ? char : '');
    const upperCaseArr = splitedStr.map(char => char === char.toUpperCase() ? char : '');
    
    const joinedLowerCaseArr = lowerCaseArr.join('');
    const joinedUpperCaseArr = upperCaseArr.join('');
    
    // sort 정렬 
    const sortedLowerArr = joinedLowerCaseArr.split('').sort().reverse();
    const srotedUpperArr = joinedUpperCaseArr.split('').sort().reverse();
    
    answer = sortedLowerArr.join('') + srotedUpperArr.join('');
    
    return answer;
}