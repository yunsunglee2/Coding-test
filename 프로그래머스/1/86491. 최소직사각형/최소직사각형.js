function solution(sizes) {
    var answer = 0;
    // 찾고자하는 값 변수 선언
    let hori = 0;
    let verti = 0;
    
    // 원단길이 순회
    sizes.forEach((size) => {
        // 눕힙다 -> 가로, 세로 길이 변경한다 -> 기준: 긴 값 = 가로 통일
        const larger = Math.max(size[0], size[1]);
        const smaller = Math.min(size[0], size[1]);
        
        hori = Math.max(smaller, hori);
        verti = Math.max(larger,verti);
    });
    
    answer = hori*verti ;
    
    return answer;
}