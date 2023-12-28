function solution(cipher, code) {
    var answer = '';
    // 인덱스  0 1 2 3 ...
    // 번째   1 2 3 4...
    // 인덱스에 + 1 
    answer = cipher.split('').map(function(v,i){
        if( (i + 1) % code === 0){
           return v
        }
    }).join('')
    return answer;
}