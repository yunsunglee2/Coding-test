
function solution(dot) {
    var answer = 0;
    // dot =[1, -3]
    // if조건문 활용
    // switch문
    let X = dot[0];
    let Y = dot[1];
    if(X > 0 && Y > 0){
        answer = 1;
    } else if (X < 0 && Y > 0 ) {
        answer = 2;
    } else if ( X < 0 && Y < 0){
        answer = 3
    } else if ( X > 0 && Y < 0){
        answer = 4;
    }
    return answer;
}