function solution(arr1, arr2) {
    var answer = 0;
    
    // 배열 길이가 같으면
    if(arr1.length === arr2.length) {
        // 원소의 합을 비교
        const combine_arr1 = arr1.reduce((acc, cur) => acc + cur, 0)
        const combine_arr2 = arr2.reduce((acc, cur) => acc + cur, 0)
        const larger = Math.max(combine_arr1, combine_arr2)
        // 모두 같을때
        if(larger === combine_arr1 && larger === combine_arr2) {
            answer = 0;
        } else {
        // 한 쪽이 더 클때
            if(larger === combine_arr1) {
                answer = 1;
            } else {
                answer = -1;
            }
        }
        
    // 배열의 길이가 다르면
    } else {
        // 배열의 길이가 긴 쪽을 선택
        answer = arr1.length > arr2.length ? 1 : -1;
    }
    return answer;
}