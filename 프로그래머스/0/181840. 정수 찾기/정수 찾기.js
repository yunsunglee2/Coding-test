function solution(num_list, n) {
    var answer = 0;
    
    // num_list를 includes로 찾고 boolean 값 반환 
    answer= num_list.includes(n) ? 1 : 0;
    
    return answer;
}