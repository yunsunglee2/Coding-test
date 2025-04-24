function locationDiff(handLocation, numberLoctaion) {
    const verticalDiff = Math.abs(handLocation[0] - numberLoctaion[0]);
    const horizontalDiff = Math.abs(handLocation[1] - numberLoctaion[1]);
    
    return verticalDiff + horizontalDiff;
}

function solution(numbers, hand) {
    const numberPad = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ['*', 0, '#']
];
    var answer = '';
    // 가로, 세로 좌표
    let leftHandLocation = [3,0];
    let rightHandLocation = [3,2];
    let numberLocation = [0,0];
    
    while(!!numbers.length) {
        const currentNumber = numbers.shift();
        
        // 위치 정보 구하기
        numberPad.forEach((numberArray, index_1) => {
            numberArray.forEach((number, index_2) => {
                if(currentNumber === number) {
                    numberLocation = [index_1,index_2];
                }
            })
        })
        
            if([1,4,7].includes(currentNumber)) {
                leftHandLocation[0] = numberLocation[0];
                leftHandLocation[1] = numberLocation[1];
                answer+='L'
            }
            if([3,6,9].includes(currentNumber)) {
                rightHandLocation[0] = numberLocation[0];
                rightHandLocation[1] = numberLocation[1];
                answer+='R'
            }
            if([2,5,8,0].includes(currentNumber)) {
                // 타이핑 손 정하기
                const leftHandDiff = locationDiff(leftHandLocation, numberLocation);
                const rightHandDiff = locationDiff(rightHandLocation, numberLocation);
                
                if(leftHandDiff > rightHandDiff) {
                    rightHandLocation[0] = numberLocation[0];
                    rightHandLocation[1] = numberLocation[1];
                    answer+='R'
                }
                if(leftHandDiff < rightHandDiff) {
                    leftHandLocation[0] = numberLocation[0];
                    leftHandLocation[1] = numberLocation[1];
                    answer+='L'
                }
                if(leftHandDiff === rightHandDiff) {
                    if(hand === "right") {
                        rightHandLocation[0] = numberLocation[0];
                        rightHandLocation[1] = numberLocation[1];
                        answer+='R'
                    } else {
                        leftHandLocation[0] = numberLocation[0];
                        leftHandLocation[1] = numberLocation[1];
                        answer+='L'
                    }
                }
            }
    }
    
    return answer;
}