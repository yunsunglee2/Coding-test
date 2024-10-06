function solution(n, control) {
    var answer = n;
    const char_list = {
        w: 1,
        s: -1,
        d: 10,
        a: -10
    }

    for(let i = 0 ; i < control.length ; i++) {
        for(const char in char_list) {
            if(control[i] === char) {
                answer = answer + char_list[char]
            }
        }
    }   
    
    return answer;
}