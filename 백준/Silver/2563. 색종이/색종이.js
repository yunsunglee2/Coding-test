var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const info = input.map(line => line.trim().split(' ').map(Number));

// 도화지는 변의 길이 100인 정사각형이다
const COLOR_PAPER_LENGTH = 10;

function solution(info) {
    const board = Array.from(Array(100), () => Array(100).fill(0));
    let answer = 0;

    // 1. 각 색종이 좌표만큼 1로 채우기
    info.forEach(location => {
        const x = location[0];
        const y = location[1];

        for (let i = x; i < x + COLOR_PAPER_LENGTH; i++) {
            for (let j = y; j < y + COLOR_PAPER_LENGTH; j++) {
                board[i][j] = 1; // 색종이가 붙은 칸을 1로 표시
            }
        }
    });

    // 2. 최종적으로 1로 표시된 칸 개수 세기
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            if (board[i][j] === 1) answer++;
        }
    }

    return answer;
};

console.log(solution(info));
