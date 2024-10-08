function solution(numbers) {
    var answer = '';
    
    // 0 or + , 주어진 배열 split
    const stringifyNumsArr = numbers.map((number) => String(number))
    
    const sortedArr = stringifyNumsArr.sort((a,b) => (b+a) - (a+b) )
    
    console.log(sortedArr)
    
    answer = sortedArr.join('')
    
    return answer[0] === '0' ? '0' : answer;
}