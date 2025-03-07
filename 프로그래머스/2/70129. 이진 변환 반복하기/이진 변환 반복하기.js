function solution(s) {
    var answer = [];
    let repeat_count = 0;
    let deleted_count = 0;
    // s에서 1의 갯수를 구한다. & 0의 갯수를 구한다.
    while(s !== '1') {
        repeat_count++;
        const splitedS = s.split('');
        const filteredS = splitedS.filter(el => el !== '0');
        deleted_count += s.length - filteredS.length;
        s = filteredS.length.toString(2);
    }
    
    // 1이 될 때 까지 길이를 2진법으로 나타내기 
    
    answer.push(repeat_count);
    answer.push(deleted_count);
    return answer;
}