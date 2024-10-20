function solution(num_list) {
    var answer = [];
    
    // num_list 에서 가장 작은 5개 오름차순 담아서 반환
    // slice 메서드를 활용하자 
    const slicedArr = num_list.sort((a,b) => a - b).slice(0,5);
    
    answer.push(...slicedArr);
    
    return answer;
}