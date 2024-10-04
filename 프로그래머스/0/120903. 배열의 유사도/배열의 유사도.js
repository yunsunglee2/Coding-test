function solution(s1, s2) {
    var answer = 0;
    
    // 두 배열을 비교하여 같은 원소를 개수 구하기 
    
    // 1. 이중 반복문으로 순회하면서 answer에 카운트 +1 
    // s1.forEach((el_1) => {
    //     s2.forEach((el_2) => {
    //         el_1 === el_2 ? answer+= 1 : answer+= 0;
    //     })
    // })
    
    // 2. filter 메서드를 통해 s1의 요소가 s2에 includes 되어 있는지 순회하고 배열의 길이로 반환
    const filteredArr = s1.filter((el) => s2.includes(el));
    
    answer = filteredArr.length;
    
    return answer;
}