function solution(arr)
{
    var answer = [];
    
    //순회하면서 푸쉬
    arr.forEach((num, i) => {
            if(answer.length === 0 || answer[answer.length-1] !== num) {
                answer.push(num)
        }
    })

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}