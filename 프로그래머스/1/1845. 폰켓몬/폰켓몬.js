    // 선택가능한 폰켓몬 갯수
    
    // 폰켓몬 종류

function solution(nums) {
    var answer = 0;
    const deDuplication = new Set(nums);
    const poncketmonTypes = deDuplication.size;
    const selectableNums = nums.length/2;
    
    answer = poncketmonTypes > selectableNums ? selectableNums : poncketmonTypes;
    
    return answer;
}