function solution(my_string, num1, num2) {
    var answer = '';
    
    // 문자열 my_string, 정수 num1,num2 
    // my_string[num1], my_string[num2]
    
    // 문자열 -> 배열(char) 
    const charArray = my_string.split('')
    
    // 배열 요소를 인덱스로 접근 
    const num1Char = charArray[num1]
    charArray[num1] = charArray[num2]
    charArray[num2] = num1Char
    
    answer = charArray.join('')
    
    return answer;
}