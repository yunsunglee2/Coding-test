function solution(t, p) {
    var answer = 0;
    const stringTLength = t.length;
    const stringPLength = p.length;
    const stringList = [];
    
    // 숫자로 이루어진 문자열 t와 p, p에서 길이가 같은 부분 문자열을 t에서 찾고,
    // slice 메서드 사용하면 될듯 
    // 어디 까지 반복? 
    for(let i = 0; i <= stringTLength - stringPLength; i++) {
        const slicedString = t.split('').slice(i, stringPLength+i).join('');
        stringList.push(slicedString);
    }
    
    // p보다 작거나 같은 것이 나오는 횟수 반환 
    stringList.forEach((stringItem) => {
        if(Number(stringItem) <= Number(p)) {
            answer +=1
        }
    })
    
    return answer;
}