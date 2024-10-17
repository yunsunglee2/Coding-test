function solution(arr, k) {
    // arr를 순회하며 요소에 k를 곱하거나 k를 더한다. 새로운 배열을 반환하므로 map 함수 
    return arr.map((el) => k%2 === 0 ? el+k : el*k)
}