function solution(bin1, bin2) {
    var answer = '';
    let ab = parseInt(bin1,2);
    console.log(ab)
    let cd = parseInt(bin2,2);
    console.log(cd)
    let sum = ab + cd
    console.log(sum)
    
    answer = sum.toString(2)
    return answer;
}