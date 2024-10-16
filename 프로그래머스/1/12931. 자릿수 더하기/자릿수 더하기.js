function solution(n) {
    var answer = 0;
    const numToStr = String(n)
    
    const el_arr = numToStr.split('')
    
    el_arr.forEach((el) => answer+=Number(el) )

    return answer;
}