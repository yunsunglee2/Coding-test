function solution(before, after) {
    var answer = 0;
    let reverse = before.split('').reverse().sort().join('')
    let afterSort = after.split('').sort().join('')
    console.log(reverse);
    console.log(afterSort);
    answer = reverse === afterSort ? 1 : 0
    return answer;
}