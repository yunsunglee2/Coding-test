function solution(keyinput, board) {
    var answer = [];
    let x = 0;
    let y = 0;
    keyinput.forEach((el)=>{
        if ( el === 'left') {
            if( -Math.trunc(board[0]/2) < x){
                x = x - 1;    
                console.log(x)
            }
        } else if ( el === 'right') {
            if(x  < Math.trunc(board[0]/2)){
                x = x + 1;    
                console.log(x)
            }
        } else if (el === 'down') {
            if( -Math.trunc(board[1]/2) < y){
                y = y - 1;    
                console.log(y)
            }
        } else if ( el === 'up') {
            if(y  < Math.trunc(board[1]/2)){
                y = y + 1;    
            }
        }
    })
    answer.push(x);
    answer.push(y);
    return answer;
}