function solution(age) {
    var answer = '';
    let ageBox = ['a','b','c','d','e','f','g','h','i','j'];
    answer = String(age).split('').map((v)=> v =ageBox[v]).join('')
    return answer;
}