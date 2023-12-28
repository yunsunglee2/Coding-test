function solution(array) {
    var answer = 0;
    let array_index = Math.floor(array.length/2)
    array.sort((a,b)=>a-b);
    answer = array[array_index]
    return answer;
}