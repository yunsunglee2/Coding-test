var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 입력 5줄을 배열에 담는다
const words = input.map(line => line.trim()).slice(0, 5); 

function solution(words) {
  let answer = '';
  let longer = 0;

  words.forEach((word) => {
    if (longer < word.length) {
      longer = word.length;
    }
  });

  for (let i = 0; i < longer; i++) {
    for (let j = 0; j < 5; j++) {
      if (words[j][i]) {
        answer += words[j][i];
      }
    }
  }

  return answer;
}

console.log(solution(words));