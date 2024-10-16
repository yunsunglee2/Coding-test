function solution(num_list) {
    
    // 모든 원소의 합 
    const combi = num_list.reduce((acc,cur) => acc + cur, 0)
    
    console.log(combi)
    
    // 모든 원소의 곱 
    const mulit = num_list.reduce((acc,cur) => acc * cur, 1)
    
    console.log(mulit)
    
    // 비교 후 0 or 1 반환
    return Math.pow(combi,2) > mulit ? 1 : 0;
}