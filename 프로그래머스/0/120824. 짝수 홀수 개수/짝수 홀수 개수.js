function solution(num_list) {
    var answer = [];
    
    // 짝수는 2로 나누어서 나머지값이 0인 숫자, 홀수는 2로 나누어서 나머지가 1인 숫자
    
    // num_list를 filter를 통해 조건에 맞는 배열을 반환 받고 길이를 answer에 push 
    const even_number_array = num_list.filter((el)=> el%2 === 0)
    const odd_number_array = num_list.filter((el)=> el%2 === 1)
    
    // 개수를 담은 배열을 반환 
    answer.push(even_number_array.length)
    answer.push(odd_number_array.length)
    
    return answer;
}