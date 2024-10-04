function solution(sizes) {
    var answer = 0;
    // 지갑 크기, 가로, 세로
    let maxWidth = 0;
    let maxHeight = 0;
    
    // 두 값중 긴 길이가 가로, 작은 길이가 세로
    sizes.forEach(([width, height]) => {
        const larger = Math.max(width, height)
        const smaller = Math.min(width, height)
        
        maxWidth = Math.max(maxWidth, larger)
        maxHeight = Math.max(maxHeight, smaller)
    })
    
    answer = maxWidth*maxHeight
    
    return answer;
}