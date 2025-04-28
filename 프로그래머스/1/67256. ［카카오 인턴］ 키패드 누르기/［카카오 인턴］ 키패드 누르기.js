function useNumberLocation(targetNumber) {
    const numberPad = [[1,2,3], [4,5,6], [7,8,9], ['*', 0, "#"]];
    let targetNumberLocation = [];
    
    numberPad.forEach((line, y) => {
        line.forEach((num, x) => {
            if(num === targetNumber) {
                targetNumberLocation.push(y, x);    
            }
        })
        ;
    })
    
    return targetNumberLocation;
}

function useLocationDiff(currentLocation, targetNumber) {
    const handDiff = [];
    
    const targetLocation = useNumberLocation(targetNumber);
    
    currentLocation.forEach(location => {
        const horizontalDiff = Math.abs(location[1] - targetLocation[1]);
        const verticalDiff = Math.abs(location[0] - targetLocation[0]);
        const diff = horizontalDiff + verticalDiff;
        handDiff.push(diff);
    })
    
    return handDiff;
}

function solution(numbers, hand) {
    var answer = '';
    const currentHandLocation = [[3,0], [3,2]];
    
    numbers.forEach(num => {
        if(num === 1 || num === 4 || num === 7) {
            currentHandLocation[0] =  useNumberLocation(num);
            answer += 'L';
        } else if(num === 3 || num === 6 || num === 9) {
            currentHandLocation[1] =  useNumberLocation(num);
            answer += 'R';
        } else if(num === 2 || num === 5 || num === 8 || num === 0) {
            // 거리 차 구하기 
            const [leftHandDiff, rightHandDiff] = useLocationDiff(currentHandLocation, num);
            // 거리 같다면 hand 확인
            if(leftHandDiff === rightHandDiff) {
                if(hand === 'right') {
                    currentHandLocation[1] = useNumberLocation(num);
                    answer+= 'R';
                } else if(hand === 'left') {
                    currentHandLocation[0] = useNumberLocation(num);
                    answer+= 'L';
                }
            } else if(leftHandDiff > rightHandDiff){
                currentHandLocation[1] =  useNumberLocation(num);
                answer+= 'R';
            } else if(leftHandDiff < rightHandDiff){
                currentHandLocation[0] =  useNumberLocation(num);
                answer+= 'L';
            }
        }
    })
    return answer;
}