function solution(num_list) {
    // 정렬하고 slice
    const sortedArr = num_list.sort((a,b) => a - b);
    const sortedArrLength = sortedArr.length;
    return sortedArr.slice(5)
}