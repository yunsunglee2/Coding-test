function solution(my_string) {
    var answer = '';
    // 1.toLowerCase -> 소문자 -> 소문자 -> 기존 문자와 같다면 대문자화
    //                  대문자 -> 소문자 -> 기존 문자와 다른다면 소문자화
    let temp = [];
    my_string.split('').forEach((el)=> {
        if(el.toLowerCase() === el) {
            temp.push(el.toUpperCase())
        } else if(el.toLowerCase() !== el){
            temp.push(el.toLowerCase())
        }
    })
    answer = temp.join('')
    return answer;
}