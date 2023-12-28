function solution(id_pw, db) {
    var answer = '';
    db.forEach((el)=> {
        if(el[0] === id_pw[0] && el[1] === id_pw[1]){   
            answer = 'login'
        } else if (el[0] === id_pw[0] && el[1] !== id_pw[1]) {
            answer = 'wrong pw'
        } else if (el[0] !== id_pw[0] && el[1] !== id_pw[1]) {
            answer = 'fail'
        }
    })
    return answer;
}