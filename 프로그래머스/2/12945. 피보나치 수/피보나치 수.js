function solution(n) {
    const NUMBER = 1234567;
    const array = [0,1,1];
    const target = n;
    // 0 1 1 2 3 5 8 13 21 ...
    // n번째 까지만 구하기
    while(array.length <= target) {
        const nextNumber = (array[array.length - 1] + array[array.length - 2]) %NUMBER;
        array.push(nextNumber);
    }
    
    return array[n]
}