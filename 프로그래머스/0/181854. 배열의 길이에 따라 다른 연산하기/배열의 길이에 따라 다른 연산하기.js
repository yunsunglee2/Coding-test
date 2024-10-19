function solution(arr, n) {
    // arr의 길이 조건에 따라 반복문으로 순회하며 요소에 n 더하기
    if(arr.length % 2 === 0) {
        return arr.map((el,i) => el = i%2===1 ? el+n : el)
        } else { 
        return arr.map((el,i) => el= i%2===0 ?  el+n : el)
    }
}