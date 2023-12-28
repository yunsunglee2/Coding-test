function solution(my_string) {
    var answer = '';
    let moEm = ['a', 'e' ,'i', 'o', 'u'];
    // bus /  모음을 제거해야한다.  
    answer = my_string.split('').filter((v)=> (!moEm.includes(v))).join('')
    return answer;
}