function solution(nums) {
    var answer = 0;
    
    // n 마리 포켓몬, n/2 마리 가져가기 가능 
    // 번호를 붙여 구분(같은 종류 === 같은 번호)
    // ex. 4마리 포켓몬 3 1 2 3
    // n / 2 마리 포켓몬 선택 방법 중, 가장 많은 종류의 포켓몬 선택 방법 
    
    // 가져가기 허용 갯수
    const allowedCount = nums.length/2
    
    // 배열에서 중복 제거하기
    const deletedNums = new Set(nums)
    
    // 중복 제거 배열 요소의 조합 계산하기
    const deletedNumsLength = deletedNums.size
    
    answer = Math.min(deletedNumsLength, allowedCount)
    
    return answer;
}