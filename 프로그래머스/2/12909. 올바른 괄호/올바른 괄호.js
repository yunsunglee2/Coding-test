function solution(s){
let balance = 0; 
    
    for(let char of s) {
        if (char === '('){
            balance++;
        } else {
            balance--;
        }
        if(balance < 0) {
        return false;
     }
    }

    return balance === 0;
}