function solution(nums) {
    var answer = 0;
    
    // N 마리 중에서 N/2 마리 픽, 최대한 다양한 종류 포켓몬 픽 
    
    const allowedCount = nums.length/2
    
    const deletedCount = new Set(nums);
    
    answer = Math.min(allowedCount, deletedCount.size)
    
    return answer;
}