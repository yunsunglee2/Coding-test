function solution(rank, attendance) {
    var answer = 0;
    const studentNumber = []
    const attendStudent = [];
    
    // rank를 순회하면서 번호와 등수 객체에 저장
    rank.forEach((item, index) => {
        studentNumber.push({number: index, rank: item, attendance: attendance[index]})
    })
    
    // 저장한 객체를 등수로 순서대로 정렬
    const sortedStudent = studentNumber.sort((a,b) => a.rank - b.rank)
    
    // 정렬된 배열 순회하며 attendStudent에 push
    sortedStudent.forEach((student) => {
        if(attendStudent.length !== 3) {
            if(student.attendance) {
            attendStudent.push(student.number)
            }
        }
    })
    
    answer = 10000*Number(attendStudent[0]) + 100*Number(attendStudent[1]) + attendStudent[2]
        
    return answer;
}