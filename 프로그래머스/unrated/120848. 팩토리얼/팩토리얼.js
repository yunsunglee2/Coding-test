function solution(n) {
    var answer = 0;
    let prev = 1;
    let cur = 1;
    let cal = []
    for(let i = 1; i <= 10; i++){
        cur = prev * i
        prev = cur
        cal.push(cur)
    }
    console.log(cal)
    for(let j = 0; j < cal.length; j++){
        if(cal[j] <= n && n < cal[j+1]){
          answer = j + 1
        } else if (cal[j+1] === n){
          answer = j + 2
        }
    }
    return answer;
}