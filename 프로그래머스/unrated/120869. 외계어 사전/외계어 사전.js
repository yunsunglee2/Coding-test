function solution(spell, dic) {
    var answer = 0;
    let temp = [];
    let newArr;
    let checkSize;
    dic.forEach((el)=>{
        for(let i = 0; i < el.length; i++){
            spell.forEach((el2)=>{
                el[i] === el2 && temp.push(el[i])
            })
            console.log(temp)
        }
        newArr = new Set([...temp])
        console.log(newArr)
        checkSize = newArr.size
        if( checkSize !== spell.length) {
            temp = [];
        } else {
            return temp
        }
        })
    spell.length === checkSize ? answer=1 : answer=2
    
    return answer;
}