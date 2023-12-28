function solution(dots) {
    var answer = 0;
    dots.sort((a,b)=>a[0]-b[0])
    console.log(dots)
    const height = Math.abs(dots[0][1] - dots[1][1]);
    dots.sort((a,b)=>a[1]-b[1])
    console.log(dots)
    const width = Math.abs(dots[0][0]- dots[1][0]);
    answer = width * height ;
    return answer;
}