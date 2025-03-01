function solution(sizes) {
    var answer = 0;
    const result = {
        larger: 0,
        smaller: 0,
    }
    // sizes를 순회하면서 대소 비교를 진행한다. 
    sizes.forEach(size => {
        const larger = Math.max(size[0], size[1]);
        const smaller = Math.min(size[0], size[1]);
        
        result.larger = Math.max(larger, result.larger);
        result.smaller = Math.max(smaller, result.smaller)
    })
    answer = result.larger*result.smaller;
    
    return answer;
}